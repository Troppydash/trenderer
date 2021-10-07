import * as marked from 'marked';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as katex from 'katex';
import * as jsdom from 'jsdom';

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

function mdToHTML(source: string) {
    const html = marked(source);

    // https://stackoverflow.com/questions/38181548/render-math-in-node-js-template-with-katex
    const texifed = html.replace(/\$\$\s*(.*?)\s*\$\$/g, function(outer, inner) {
        return katex.renderToString(inner, { displayMode: true, output: 'html' , throwOnError: false});
    }).replace(/\[\s*(.*?)\s*\]/g, function(outer, inner) {
        return katex.renderToString(inner, { displayMode: true, output: 'html' , throwOnError: false});
    }).replace(/\$\s*(.*?)\s*\$/g, function(outer, inner) {
        return katex.renderToString(inner, { displayMode: false,  output: 'html', throwOnError: false});
    });

    const { window } = new jsdom.JSDOM(texifed);
    const body = window.document.querySelector('body');
    const children = [...body.children];
    for (let i = 0, j = 0; i < children.length; ++i, ++j) {
        const child = children[i];
        if (child.tagName === 'H1') {
            child.className = 'chapter';
            continue;
        }

        if (child.tagName === 'H2') {
            const start = i;
            i += 1;
            while (i < children.length && children[i].tagName !== 'H2')
                i += 1;

            const sectionChildren = children.slice(start, i);
            for (let j = start; j < sectionChildren.length; ++j) {
                body.removeChild(children[j]);
            }

            const section = window.document.createElement('div');
            section.className = 'section';
            section.append(...sectionChildren);

            body.children[j-1].insertAdjacentElement('afterend', section);
            i -= 1;
        }
    }

    return body.innerHTML;
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

    note(`Processing ${files.length} files`);

    const template = (await fs.readFile('assets/base.html')).toString();

    for (const file of files) {
        const content = (await fs.readFile(file)).toString();
        const body = mdToHTML(content);
        const newPath = changeExtension(file, ".html");

        const html = templateMapping(template, {
            title: path.basename(newPath, path.extname(newPath)),
            body: body
        });

        // change endings to .html
        await fs.writeFile(newPath, html);
        note(`Created ${newPath}`);
    }

    note('Done')

    return 0;
}


main(process.argv)
    .then(code => process.exit(code))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
