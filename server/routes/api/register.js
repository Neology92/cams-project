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
        throw createError(400, 'Error: Login nie może być pusty.', {
            field: 'login',
            success: false,
        });
    }
    if (!email) {
        throw createError(400, 'Error: Email nie może być pusty.', {
            field: 'email',
            success: false,
        });
    }
    if (!password) {
        throw createError(400, 'Error: Password nie może być pusty.', {
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
                            'Error: Użytkownik z podanym loginem jest już zarejestrowany.',
                            {
                                field: 'login',
                                success: false,
                            }
                        )
                    );
                }
                return next(
                    new createError(
                        409,
                        'Error: Email jest już zainstalowany.',
                        {
                            field: 'email',
                            success: false,
                        }
                    )
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
                        throw createError(
                            500,
                            'Error: Nie można dodać nowego użytkownika.',
                            {
                                success: false,
                            }
                        );
                    } else {
                        res.send({
                            success: true,
                            errorMessage: 'Zarejestrowano.',
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
