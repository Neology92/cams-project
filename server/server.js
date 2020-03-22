import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/app.js';

function handleRender(req, res) {
    const reactHtml = ReactDOMServer.renderToString(<App />);

    const indexFile = path.resolve(__dirname, 'public', 'index.html');

    fs.readFile(indexFile, 'utf8', (err, htmlData) => {
        if (err) {
            return res.status(404).send('File not found');
        }

        // inject the rendered app into our html
        let page = '';
        if (process.env.NODE_ENV === 'production') {
            page = htmlData.replace(
                '<div id="app"></div>',
                `<div id="app">${reactHtml}</div>`
            );
        } else {
            page = htmlData.replace(
                '<div id="app"></div>',
                `<div id="app">${reactHtml}</div>
                <script src="${process.env.BROWSER_REFRESH_URL}"></script>`
            );
        }

        //send page
        return res.send(page);
    });
}

const app = express();

app.use('/public', express.static('./public'));

app.get('*', handleRender);
app.listen(3000);
console.log('App is running on http://localhost:3000');
