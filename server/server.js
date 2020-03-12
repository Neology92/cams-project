const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const users = require('./routes/api/users');
const register = require('./routes/api/register');

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

// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
