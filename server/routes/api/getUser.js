const express = require('express');
const router = express.Router();

const createError = require('http-errors');

const User = require('../../models/User');

router.post('/', (req, res, next) => {
    const { userId } = req;

    // Check if userId isn;t empty
    if (!userId) {
        throw createError(400, 'Error: User Id cannot be empty.', {
            success: false,
        });
    }

    User.findOne({
        _id: userId,
    })
        .then(user => {
            if (user) {
                res.send({
                    success: true,
                    message: 'User found',
                    user: user,
                });
            } else {
                return next(
                    new createError(404, 'Error: User not found', {
                        success: false,
                    })
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
