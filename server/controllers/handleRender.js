/* eslint  prefer-const: 0 */
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet as ScServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MuiServerStyleSheet } from '@material-ui/core/styles';
import App from '../../client/App.js';

const handleRender = (req, res) => {
    let context = {};
    const scSheet = new ScServerStyleSheet();
    const muiSheet = new MuiServerStyleSheet();

    const reactHtml = ReactDOMServer.renderToString(
        muiSheet.collect(
            scSheet.collectStyles(
                <StaticRouter location={req.url} context={context}>
                    <App req={req} />
                </StaticRouter>
            )
        )
    );

    const indexFile = path.resolve(__dirname, 'public', 'index.html');
    fs.readFile(indexFile, 'utf8', (err, htmlData) => {
        if (err) {
            return res.status(404).send('File not found');
        }

        let title = 'Faply';
        let styles = '';
        let scripts = '';
        let body = reactHtml;

        if (process.env.NODE_ENV === 'development') {
            scripts = `<script src="${process.env.BROWSER_REFRESH_URL}"></script>`;
        }

        // Mui and styled-components
        const muiStyleTag = `<style id="jss-server-side">${muiSheet.toString()}</style>`;
        const scStyleTag = `${scSheet.getStyleTags()}`;
        styles = `
        ${muiStyleTag}
        ${scStyleTag}
        `;

        // inject rendered app into our html
        htmlData = htmlData.replace(
            '<div id="app"></div>',
            `<div id="app">${body}</div>`
        );

        // inject title into our html
        htmlData = htmlData.replace(
            '<title></title>',
            `<title>${title}</title>`
        );

        // inject scripts into our html
        htmlData = htmlData.replace(
            '</body>',
            `${scripts}
                </body>`
        );

        // inject styles into our html
        htmlData = htmlData.replace(
            '</head>',
            `${styles}
            </head>`
        );

        // send page
        return res.send(htmlData);
    });
};

export default handleRender;
