import express from 'express';
import Error from 'http-errors';

import User from '../../models/User';
import UserSession from '../../models/UserSession';

const router = express.Router();

export default router.post('/', (req, res, next) => {
    const {
        body: { password },
    } = req;
    let {
        body: { login },
    } = req;

    // Check if fields are valid
    if (!login) {
        throw Error(400, 'Error: Login nie może być pusty.', {
            field: 'login',
            success: false,
        });
    }

    if (!password) {
        throw Error(400, 'Error: Hasło nie może być puste.', {
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
                login,
            },
        ],
    })
        .then(user => {
            if (user) {
                // Check if password matches
                if (!user.validPassword(password)) {
                    return next(
                        new Error(409, 'Error: Hasło niepoprawne.', {
                            field: 'password',
                            success: false,
                        })
                    );
                }
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
                        throw Error(500, 'Error: Nie udało się zalogować.', {
                            success: false,
                        });
                    });
            } else {
                // If user doesn't exist
                return next(
                    new Error(409, 'Error: Taki użytkownik nie istnieje.', {
                        field: 'login',
                        success: false,
                    })
                );
            }

            return 0;
        })
        .catch(err => {
            throw Error(500, `Error: Server error: ${err}`, {
                success: false,
            });
        });
});
