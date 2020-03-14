const express = require('express');
const router = express.Router();

const createError = require('http-errors');

const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

router.post('/', (req, res, next) => {
    let {
        body: { password, login },
    } = req;

    // Check if fields are valid
    if (!login) {
        throw createError(400, 'Error: Login nie może być pusty.', {
            field: 'login',
            success: false,
        });
    }

    if (!password) {
        throw createError(400, 'Error: Hasło nie może być puste.', {
            field: 'password',
            success: false,
        });
    }

    login = login.toLowerCase();

    // Check if user exists in database
    User.findOne({
        $or: [
            {
                'safety.email': login,
            },
            {
                login: login,
            },
        ],
    })
        .then(user => {
            if (user) {
                // Check if password matches
                if (!user.validPassword(password)) {
                    return next(
                        new createError(409, 'Error: Hasło niepoprawne.', {
                            field: 'password',
                            success: false,
                        })
                    );
                } else {
                    const userSession = new UserSession({
                        userId: user._id,
                    });

                    // Push userSession
                    userSession
                        .save()
                        .then(doc => {
                            res.send({
                                success: true,
                                errorMessage: 'Zalogowano.',
                                token: doc._id,
                            });
                        })
                        .catch(() => {
                            throw createError(
                                500,
                                'Error: Nie udało się zalogować.',
                                {
                                    success: false,
                                }
                            );
                        });
                }
            } else {
                // If user doesn't exist
                return next(
                    new createError(
                        409,
                        'Error: Taki użytkownik nie istnieje.',
                        {
                            field: 'login',
                            success: false,
                        }
                    )
                );
            }
        })
        .catch(err => {
            throw createError(500, `Error: Server error: ${err}`, {
                success: false,
            });
        });
});

module.exports = router;
