import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/app.js';

function handleRender(req, res) {
    const reactHtml = ReactDOMServer.renderToString(<App />);

    const indexFile = path.resolve(__dirname, '..', 'client', 'index.html');

    fs.readFile(indexFile, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }
        // inject the rendered app into our html
        htmlData.replace(
            '<div id="app"></div>',
            `<div id="app">${reactHtml}</div>`
        );

        //send
        return res.send(htmlData);
    });
}

const app = express();

app.use('/public', express.static('./public'));

app.get('*', handleRender);
app.listen(3000);
console.log('App is running on http://localhost:3000');
