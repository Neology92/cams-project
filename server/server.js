import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../client/app.js';
import htmlTemplate from '../client/template';

function handleRender(req, res) {
    let context = {};

    const reactHtml = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    // inject the rendered app into our html
    let body = '';
    let title = 'Faply';
    if (process.env.NODE_ENV === 'production') {
        body = reactHtml;
    } else {
        body = `${reactHtml}
                <script src="${process.env.BROWSER_REFRESH_URL}"></script>`;
    }

    //send page
    return res.send(htmlTemplate(body, title));
}

const app = express();

app.use('/styles', express.static(path.resolve(__dirname, 'public', 'styles')));
app.use(
    '/styles/fonts',
    express.static(path.resolve(__dirname, 'public', 'fonts'))
);
app.use('/js', express.static(path.resolve(__dirname, 'public', 'js')));

app.get('*', handleRender);

app.listen(3000);
console.log('App is running on http://localhost:3000');
