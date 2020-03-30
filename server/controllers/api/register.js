import express from 'express';
import Error from 'http-errors';

import User from '../../models/User';

const router = express.Router();

export default router.post('/', (req, res, next) => {
    const {
        body: { password },
    } = req;
    let {
        body: { email, login },
    } = req;

    // Check if fields are valid
    if (!login) {
        throw Error(400, 'Error: Login nie może być pusty.', {
            field: 'login',
            success: false,
        });
    }
    if (!email) {
        throw Error(400, 'Error: Email nie może być pusty.', {
            field: 'email',
            success: false,
        });
    }
    if (!password) {
        throw Error(400, 'Error: Password nie może być pusty.', {
            field: 'password',
            success: false,
        });
    }

    const username = login;

    email = email.toLowerCase();
    login = login.toLowerCase();

    // Check if email or login doesn't exist in database
    User.findOne({
        $or: [
            {
                'safety.email': email,
            },
            {
                login,
            },
        ],
    })
        .then(result => {
            if (result) {
                if (result.login === login) {
                    // We have to return error inside async functions
                    return next(
                        new Error(
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
                    new Error(409, 'Error: Email jest już zainstalowany.', {
                        field: 'email',
                        success: false,
                    })
                );
            }
            // If everything is fine - create user
            const newUser = new User({
                login,
                safety: {
                    email,
                },
                account: {
                    username,
                },
            });
            newUser.safety.password = newUser.generateHash(password);

            // Push user to database
            newUser.save(err => {
                if (err) {
                    throw Error(
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

            return 0;
        })
        .catch(err => {
            throw Error(500, `Error: Server error: ${err}`, {
                success: false,
            });
        });
});
