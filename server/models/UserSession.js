const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSessionSchema = new Schema({
    userId: {
        type: Number,
        default: -1,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('userSession', UserSessionSchema);
