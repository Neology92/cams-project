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
                console.log(result);
                if (result.login === login) {
                    return res.send({
                        success: false,
                        errorMessage:
                            'Error: User with that login is already registered',
                        field: 'login',
                    });
                }
                return res.send({
                    success: false,
                    errorMessage: 'Error: Email is already registered',
                    field: 'email',
                });
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
            }
        })
        .catch(() => {
            return res.send({
                success: false,
                errorMessage: 'Error: Server Error',
            });
        });
});

module.exports = router;
