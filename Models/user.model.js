import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
        },
        rating: {
            type: String,
            default: '0',
        },
        role: {
            type: String,
            default: 'user'
        },
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model('user', userSchema);
// module.exports = user;