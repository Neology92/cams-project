/* eslint prefer-const: 0 no-console: 0 */
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import path from 'path';

import handleRender from './controllers/handleRender';

import register from './controllers/api/register';
import login from './controllers/api/login';
import logout from './controllers/api/logout';
import verifyToken from './controllers/api/verifyToken';
import getUser from './controllers/api/getUser';

const app = express();

// Bodyparser
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log('Error: ', err));

// Api calls
app.use('/api/register', register);
app.use('/api/login', login);
app.use('/api/logout', logout);
app.use('/api/verifyToken', verifyToken);
app.use('/api/verifyToken', getUser);

// Getting static assets
app.use('/styles', express.static(path.resolve(__dirname, 'public', 'styles')));
app.use(
    '/styles/fonts',
    express.static(path.resolve(__dirname, 'public', 'fonts'))
);
app.use('/js', express.static(path.resolve(__dirname, 'public', 'js')));
app.use('/img', express.static(path.resolve(__dirname, 'public', 'img')));

// Render app
app.use('/', handleRender);

// Error handler
// eslint-disable-next-line
app.use((error, req, res, next) => {
    // Set HTTP Status code
    res.status(error.status);

    // Send response
    res.json({
        message: error.message,
        field: error.field,
        success: error.success,
    });
});

// Listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
