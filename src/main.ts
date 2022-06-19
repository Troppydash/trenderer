import * as marked from 'marked';
import {promises as fs} from 'fs';
import * as path from 'path';
import * as katex from 'katex';
import * as jsdom from 'jsdom';
import * as minify from 'html-minifier-terser';
import * as he from 'he';
import * as chokdiar from 'chokidar';
import * as readline from "readline";

const SETTINGS = {
    prerender: false,
    imagePrefix: "",
    graphs: true,
}


// https://stackoverflow.com/questions/5953239/how-do-i-change-file-extension-with-javascript/5953384
function changeExtension(file, extension) {
    const basename = path.basename(file, path.extname(file))
    return path.join(path.dirname(file), basename + extension)
}

function templateMapping(template: string, mapping: Record<string, string>): string {
    for (const [key, value] of Object.entries(mapping)) {
        template = template.replace(`{{${key}}}`, value);
    }
    return template;
}

function formatLatex(latex: string): string {
    return latex.replace(/[\r\n]/g, ' ');
}

function saveAndReplace(raw: string): [string, string[]] {
    const mapping = [];
    const replaced = raw.replace(/\\\[\s*((.|\n|\r)*?)\s*\\\]/g, (_, latex) => {
        if (SETTINGS.prerender) {
            mapping.push(katex.renderToString(formatLatex(latex), {
                displayMode: true,
                output: 'html',
                throwOnError: false
            }));
        } else {
            mapping.push(`<span class="katex-code-disp">${formatLatex(latex)}</span>`);
        }

        return `<>${mapping.length - 1}<>`;
    }).replace(/\$\s*((.|\n|\r)*?)\s*\$/g, (_, latex) => {
        if (SETTINGS.prerender) {
            mapping.push(katex.renderToString(formatLatex(latex), {
                displayMode: false,
                output: 'html',
                throwOnError: false
            }));
        } else {
            mapping.push(`<span class="katex-code-inline">${formatLatex(latex)}</span>`);
        }

        return `<>${mapping.length - 1}<>`;
    });

    return [replaced, mapping];
}

function replaceMapping(md: string, mapping: string[]): string {
    mapping.forEach((map, index) => {
        md = md.replace(`<>${index}<>`, map);
    });
    return md;
}

function groupHeadings(filename: string, html: string): string {
    const {window} = new jsdom.JSDOM(html);
    const body = window.document.querySelector('body');

    // replace image tags
    const images = body.querySelectorAll('img');
    for (const image of images) {
        // change path
        const src = image.getAttribute('src');
        image.setAttribute('src', `${SETTINGS.imagePrefix}${filename}/${src}`);

        // default size
        image.setAttribute('width', '350px');

        // get custom attributes
        const parent = image.parentElement;
        if (parent != null) {
            const text = parent.textContent;
            // get key,value pair as key=pair attributes, seperatred by comma in text between {}
            const keyValuePairs = text.match(/\{(.*?)\}/);
            if (keyValuePairs) {
                const keyValuePairsString = keyValuePairs[1];
                const keyValuePairsArray = keyValuePairsString.split(',');
                const keyValuePairsObject = keyValuePairsArray.reduce((acc, pair) => {
                    const [key, value] = pair.split('=');
                    acc[key] = value;
                    return acc;
                }, {});


                // add attributes to image
                for (const [key, value] of Object.entries(keyValuePairsObject)) {
                    image.setAttribute(key, value as any);
                }

                // remove key,value pair from text
                parent.innerHTML = parent.innerHTML.replace(/\{(.*?)\}/, '');
            }
        }
    }

    // group headings
    for (const level of [4, 3, 2, 1]) {
        const children = [...body.children];

        let open = false;
        let start = [];
        for (let i = 0; i < children.length; ++i) {
            const child = children[i];

            if (child.tagName.startsWith('H')) {
                if (child.tagName === `H${level}`) {
                    child.className = `H${level}`;

                    if (open) {
                        start.push(i);
                    }

                    start.push(i);
                    open = true;
                }

                if (open && child.tagName < `H${level}`) {
                    start.push(i);
                    open = false;
                }
            }
        }

        if (open) {
            start.push(children.length);
        }

        start = start.reverse();
        for (let i = 0; i < start.length; i += 2) {
            const end = start[i];
            const index = start[i + 1];

            const slice = children.slice(index, end);
            for (const child of slice) {
                body.removeChild(child);
            }

            const section = window.document.createElement('div');
            section.className = `H${level}-section`;

            // add custom width
            if (level === 1) {
                section.style.width = `${500 * Math.max(slice.length - 1, 1)}px`;
            }

            section.append(...slice);

            if (body.children.length === 0) {
                body.appendChild(section);
            } else if (index - 1 < 0) {
                body.children[0].insertAdjacentElement('beforebegin', section);
            } else {
                body.children[index - 1].insertAdjacentElement('afterend', section);
            }
        }
    }

    return body.innerHTML;
}


function generateGraphs(source: string): [string, { [key: number]: object }] {
    // do a full regex search
    const findGraphs = /\\begin{graph}(?:\r?\n)?\"(.*)\",(?:\r?\n)?((?:[\w\d]+=[+-]?(?:\d*\.)?\d+;?)+),(?:\r?\n)?({[^\f]+?})(?:\r?\n)?\\end{graph}/g;

    const mapping = {};
    let i = -1;
    const replaced = source.replace(findGraphs, (_, fn, args, options) => {
        i += 1;
        const parsedArgs = {};
        for (const pair of args.split(';')) {
            if (!pair) {
                continue;
            }
            parsedArgs[pair.split('=')[0]] = +pair.split('=')[1];
        }

        mapping[i] = {
            fn,
            args: encodeURIComponent(JSON.stringify(parsedArgs)),
            options: encodeURIComponent(JSON.stringify(eval('(' + options + ')')))
        };
        return `<!>${i}</!>`;
    });

    return [replaced, mapping];
}

function replaceGraphs(html: string, mapping: { [key: number]: any }): string {
    return html.replace(/<!>(\d+)<\/!>/g, (_, matchId) => {
        const item = mapping[matchId];
        return `<div id="canvas${matchId}" class="canvas" data-fn="${item.fn}" data-args="${item.args}" data-options="${item.options}"></div>`;
    });
}

function mdToHTML(filename: string, source: string) {
    // find \begin{graph}
    const [raw, map] = generateGraphs(source);

    const [md, mapping] = saveAndReplace(raw);
    const html = he.decode(marked(md));
    const texifed = replaceMapping(html, mapping)

    const replaced = replaceGraphs(texifed, map);
    return groupHeadings(filename, replaced);
}

async function mdFiles(args: string[]) {
    const files = [];

    for (const arg of args) {
        const stat = await fs.lstat(arg);
        if (stat.isFile()) {
            if (path.extname(arg) === '.md') {
                files.push(arg);
            }
        } else if (stat.isDirectory()) {
            const innerFiles = await fs.readdir(arg);
            for (const file of innerFiles) {
                if (path.extname(file) === '.md') {
                    files.push(path.join(arg, file));
                }
            }
        } else {
            throw new Error(`unknown file type located at: ${arg}`);
        }
    }

    return files;
}

function note(...message: string[]) {
    console.log('(log)', ...message);
}

async function generateHTML(file: string, template: string, graph?: string): Promise<string> {
    const content = (await fs.readFile(file)).toString();
    const body = mdToHTML(path.parse(file).name, content);

    // change endings to .html
    const newPath = changeExtension(file, ".html");

    const html = templateMapping(template, {
        title: path.basename(newPath, path.extname(newPath)),
        body: body,
        scripts: graph ? graph : ''
    });

    const minied = await minify.minify(html, {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        includeAutoGeneratedTags: false,
        minifyCSS: true,
        // minifyJS: true,
    });
    await fs.writeFile(newPath, minied);
    return newPath;
}

// async prompt
async function prompt(question: string, defaultValue?: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise<string>((resolve, reject) => {
        rl.question(question, (answer) => {
            rl.close();
            if (answer) {
                resolve(answer);
            } else if (defaultValue) {
                resolve(defaultValue);
            } else {
                reject(new Error('no answer'));
            }
        });
    });
}

async function main(args: string[]) {
    const [exe, index, ...rest] = args;
    if (rest.length === 0) {
        note(`using default folder 'data'`)
        rest.push('data')
    }

    const files = (await mdFiles(rest)).filter(name => name.includes('circuit'));
    if (files.length === 0) {
        note(`processing ${0} files, exiting`);
        return 0;
    }

    note(`processing ${files.length} files`);

    const template = (await fs.readFile('assets/base.html')).toString();
    let graph;
    if (SETTINGS.graphs) {
        graph = (await fs.readFile('assets/graph.js')).toString()
    }

    const watchers = []
    for (const file of files) {
        const newPath = await generateHTML(file, template, graph);
        note(`created "${newPath}"`);

        const watcher = chokdiar.watch(file);
        watcher.on('change', async () => {
            note(`regenerating ${file}`);
            const newPath = await generateHTML(file, template);
            note(`created "${newPath}"`);
        });
        watchers.push(watcher);
    }

    // wait for ctrl+c
    process.on('SIGINT', async () => {
        for (const watcher of watchers) {
            await watcher.close();
        }
        process.exit(0);
    });

    // wait forever
    await new Promise(() => {});

    // try {
    //     await prompt('ENTERING WATCH MODE, PRESS ENTER TO EXIT...\n');
    // } catch (e) {
    //     note(`exiting`);
    // } finally {
    //     for (const watcher of watchers) {
    //         await watcher.close();
    //     }
    // }

    return 0;
}


main(process.argv)
    .then(code => process.exit(code))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

// TODO: make an option to avoid pre-rendering
