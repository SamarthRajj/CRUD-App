import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true
        },
        rating: {
            type: Number,
            default: 0
        },
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model('user', userSchema);
// module.exports = user;