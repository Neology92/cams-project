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
            errorMessage: 'Error: Login cannot be blank',
            field: 'login',
        });
    }
    if (!email) {
        return res.send({
            success: false,
            errorMessage: 'Error: Email cannot be blank',
            field: 'email',
        });
    }
    if (!password) {
        return res.send({
            success: false,
            errorMessage: 'Error: Password cannot be blank',
            field: 'password',
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
                    errorMessage: 'Error: Server Error',
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    errorMessage: 'Error: Email is already registered',
                    field: 'email',
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
                    errorMessage: 'Error: Server Error',
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    errorMessage:
                        'Error: User with that login is already registered',
                    field: 'login',
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
                errorMessage: err,
            });
        } else {
            res.send({
                success: true,
                errorMessage: 'Signed up',
            });
        }
    });
});

module.exports = router;
