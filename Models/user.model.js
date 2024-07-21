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
        rating: {
            type: String,
            required: true,
            default: 0
        },
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model('user', userSchema);
// module.exports = user;