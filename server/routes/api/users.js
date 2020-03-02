const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.get('/', (req, res) => {
    User.find()
        .sort({ _id: -1 })
        .then(users => res.json(users));
});

router.post('/', (req, res) => {
    const newUser = new User({
        login: req.body.login,
        wallet: 0,
        safety: {
            email: req.body.email,
            password: req.body.password,
        },
    });

    newUser.save().then(user => res.json(user));
});

router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.deleteOne().then(() => res.json({ success: true })))
        .catch(() => res.status(404).json({ success: false }));
});

router.patch('/:id', (req, res) => {
    const update = req.body;

    User.findById(req.params.id)
        .then(user =>
            user.updateOne(update).then(() => res.json({ success: true }))
        )
        .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
