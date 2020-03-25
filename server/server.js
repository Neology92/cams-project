import express from 'express';
import path from 'path';

import handleRender from './controllers/handleRender';

const app = express();

app.use('/styles', express.static(path.resolve(__dirname, 'public', 'styles')));
app.use(
    '/styles/fonts',
    express.static(path.resolve(__dirname, 'public', 'fonts'))
);
app.use('/js', express.static(path.resolve(__dirname, 'public', 'js')));

app.use('*', handleRender);

app.listen(3000);
console.log('App is running on http://localhost:3000');
