import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const UserSchema = new Schema({
    role: {
        type: String,
        default: 'default',
    },

    login: {
        type: String,
        required: true,
    },
    wallet: {
        type: Number,
        default: 0,
    },
    safety: {
        email: { type: String, required: true },
        password: { type: String, required: true },
        passwordTimestamp: { type: Date, default: Date.now() },
        isDeleted: { type: Boolean, default: false },
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
    socialMedia: {
        type: Map,
        default: {
            instagram: '',
            twitter: '',
            webpage: '',
        },
    },
    streamSettings: {
        type: Map,
        default: {
            showTokens: true,
            allowGifts: true,
        },
    },
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.safety.password);
};

export default mongoose.model('user', UserSchema);
