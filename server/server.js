const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');

const register = require('./routes/api/register');
const login = require('./routes/api/login');
const logout = require('./routes/api/logout');
const verifyToken = require('./routes/api/verifyToken');
const getUser = require('./routes/api/getUser');

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

// Use Routes
app.use('/api/users', users);
app.use('/api/register', register);
app.use('/api/login', login);
app.use('/api/logout', logout);
app.use('/api/verifyToken', verifyToken);
app.use('/api/verifyToken', getUser);

// Error handler
//eslint-disable-next-line
app.use((error, req, res, next) => {
    // Set HTTP Status code
    res.status(error.status);

    // Send response
    res.json({
        errorMessage: error.message,
        field: error.field,
        success: error.success,
    });
});

// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
