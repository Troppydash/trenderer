import * as marked from 'marked';
import {promises as fs} from 'fs';
import * as path from 'path';
import * as katex from 'katex';
import * as jsdom from 'jsdom';
import * as minify from 'html-minifier-terser';
import * as he from 'he';

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
        mapping.push(katex.renderToString(formatLatex(latex), {
            displayMode: true,
            output: 'html',
            throwOnError: false
        }));
        return `<>${mapping.length - 1}<>`;
    }).replace(/\$\s*((.|\n|\r)*?)\s*\$/g, (_, latex) => {
        mapping.push(katex.renderToString(formatLatex(latex), {
            displayMode: false,
            output: 'html',
            throwOnError: false
        }));
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

function groupHeadings(html: string): string {
    const {window} = new jsdom.JSDOM(html);
    const body = window.document.querySelector('body');

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
                section.style.width = `${500 * (slice.length-1)}px`;
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

function mdToHTML(source: string) {
    const [md, mapping] = saveAndReplace(source);
    const html = he.decode(marked(md));
    const texifed = replaceMapping(html, mapping)

    return groupHeadings(texifed);
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

async function main(args: string[]) {
    const [exe, index, ...rest] = args;
    const files = await mdFiles(rest);

    note(`processing ${files.length} files`);

    const template = (await fs.readFile('assets/base.html')).toString();

    for (const file of files) {
        const content = (await fs.readFile(file)).toString();
        const body = mdToHTML(content);

        // change endings to .html
        const newPath = changeExtension(file, ".html");

        const html = templateMapping(template, {
            title: path.basename(newPath, path.extname(newPath)),
            body: body
        });

        const minied = await minify.minify(html, {
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            includeAutoGeneratedTags: false,
            minifyCSS: true,
            minifyJS: true,
        });
        await fs.writeFile(newPath, minied);
        note(`created ${newPath}`);
    }

    note('done')

    return 0;
}


main(process.argv)
    .then(code => process.exit(code))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
