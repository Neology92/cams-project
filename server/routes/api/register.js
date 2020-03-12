const express = require('express');
const router = express.Router();

const createError = require('http-errors');

const User = require('../../models/User');

router.post('/', (req, res, next) => {
    const {
        body: { password, login },
    } = req;
    let {
        body: { email },
    } = req;

    // Check if fields are valid
    if (!login) {
        throw createError(400, 'Error: Login cannot be blank', {
            field: 'login',
            success: false,
        });
    }
    if (!email) {
        throw createError(400, 'Error: Email cannot be blank', {
            field: 'email',
            success: false,
        });
    }
    if (!password) {
        throw createError(400, 'Error: Password cannot be blank', {
            field: 'password',
            success: false,
        });
    }

    email = email.toLowerCase();

    // Check if email or login doesn't exist in database
    User.findOne({
        $or: [
            {
                'safety.email': email,
            },
            {
                login: login,
            },
        ],
    })
        .then(result => {
            if (result) {
                if (result.login === login) {
                    // We have to return error inside async functions
                    return next(
                        new createError(
                            409,
                            'Error: User with that login is already registered',
                            {
                                field: 'login',
                                success: false,
                            }
                        )
                    );
                }
                return next(
                    new createError(409, 'Error: Email is already registered', {
                        field: 'email',
                        success: false,
                    })
                );
            } else {
                // If everything is fine - create user
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

                // Push user to database
                newUser.save(err => {
                    if (err) {
                        throw createError(500, 'Error: Couldn;t add new user', {
                            success: false,
                        });
                    } else {
                        res.send({
                            success: true,
                            errorMessage: 'Signed up',
                        });
                    }
                });
            }
        })
        .catch(err => {
            throw createError(500, `Error: Server error: ${err}`, {
                success: false,
            });
        });
});

module.exports = router;
