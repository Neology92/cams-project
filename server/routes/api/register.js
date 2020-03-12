const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.post('/', (req, res) => {
    const {
        body: { password, login },
    } = req;
    let {
        body: { email },
    } = req;

    // Check if fields are valid
    if (!login) {
        return res.send({
            success: false,
            message: 'Error: Login cannot be blank',
        });
    }
    if (!email) {
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank',
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank',
        });
    }

    email = email.toLowerCase();

    // Check if email doesn't exist in database
    User.find(
        {
            'safety.email': email,
        },
        (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error',
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Email is already registered',
                });
            }
        }
    );

    // Check if login doesn't exist in database
    User.find(
        {
            login: login,
        },
        (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error',
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message:
                        'Error: User with that login is already registered',
                });
            }
        }
    );

    const newUser = new User({
        login: login,
        safety: {
            email: email,
        },
        account: {
            username: login,
        },
    });
    newUser.safety.password = newUser.generateHash(password);

    newUser.save(err => {
        if (err) {
            res.send({
                success: false,
                message: err,
            });
        } else {
            res.send({
                success: true,
                message: 'Signed up',
            });
        }
    });
});

module.exports = router;
