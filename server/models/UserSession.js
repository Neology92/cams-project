import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSessionSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now(),
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model('userSession', UserSessionSchema);
