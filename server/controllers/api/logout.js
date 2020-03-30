import express from 'express';
import Error from 'http-errors';

import UserSession from '../../models/UserSession';

const router = express.Router();

export default router.post('/', (req, res, next) => {
    const {
        body: { sessionToken },
    } = req;

    // Check if fields are valid
    if (!sessionToken) {
        throw Error(400, 'Error: Empty session token.', {
            success: false,
        });
    }

    // Check if session exists
    UserSession.deleteOne({
        _id: sessionToken,
    })
        .then(session => {
            if (session) {
                return res.send({
                    success: true,
                    message: 'Wylogowano',
                });
            }
            return next(
                new Error(404, 'Error: Session not found', {
                    success: true,
                })
            );
        })
        .catch(err => {
            throw Error(500, `Error: Server error: ${err}`, {
                success: false,
            });
        });
});
