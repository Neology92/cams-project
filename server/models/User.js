const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    role: {
        type: String,
        default: 'default',
        required: true,
    },

    login: {
        role: String,
        required: true,
    },
    wallet: {
        type: Number,
        default: 0,
        required: true,
    },
    safety: {
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    account: {
        type: Map,
        default: {
            sex: '',
            avatar: '',
            username: '',
        },
    },
    preferences: {
        type: Map,
        default: {
            sex: 'female',
            tags: [],
        },
    },
    social_media: {
        type: Map,
        default: {
            instagram: '',
            twitter: '',
            webpage: '',
        },
    },
    stream_settings: {
        type: Map,
        default: {
            show_tokens: true,
            allow_gifts: true,
        },
    },
});

module.exports = mongoose.model('user', UserSchema);
