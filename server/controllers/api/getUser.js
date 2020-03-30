import express from 'express';
import Error from 'http-errors';

import User from '../../models/User';

const router = express.Router();

export default router.post('/', (req, res, next) => {
    const { userId } = req;

    // Check if userId isn't empty
    if (!userId) {
        throw Error(400, 'Error: User Id cannot be empty.', {
            success: false,
        });
    }

    User.findOne({
        _id: userId,
    })
        .then(user => {
            if (user) {
                return res.send({
                    success: true,
                    message: 'User found',
                    user,
                });
            }
            return next(
                new Error(404, 'Error: User not found', {
                    success: false,
                })
            );
        })
        .catch(err => {
            throw Error(500, `Error: Server error: ${err}`, {
                success: false,
            });
        });
});
