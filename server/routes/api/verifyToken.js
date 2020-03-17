const express = require('express');
const router = express.Router();

const createError = require('http-errors');

const UserSession = require('../../models/UserSession');
// const User = require('../../models/User');

router.post('/', (req, res, next) => {
    const {
        body: { sessionToken },
    } = req;

    // Check if fields are valid
    if (!sessionToken) {
        throw createError(400, 'Error: Empty session token.', {
            success: false,
        });
    }

    // Check if session exists
    UserSession.findOne({
        _id: sessionToken,
    })
        .then(session => {
            if (session) {
                req.userId = session.userId;
                next();
            } else {
                return next(
                    new createError(404, 'Error: Session not found', {
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
