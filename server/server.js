const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const users = require('./routes/api/users');

const register = require('./routes/api/register');
const login = require('./routes/api/login');
const verifyToken = require('./routes/api/verifyToken');

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
app.use('/api/items', items);
app.use('/api/users', users);
app.use('/api/register', register);
app.use('/api/login', login);
app.use('/api/verifyToken', verifyToken);

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
