import { User } from '../Models/user.model.js';

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
        // console.log(user);
    }
    catch (err) {
        console.log(err);
    }
}

export const getAllUser = async (req, res) => {
    // res.send('Request Recieved');
    try {
        const users = await User.find({});
        res.status(200).json(users);
        // console.log(user);
    }
    catch (err) {
        console.log(err);
    }
}

export const getUserByName = async (req, res) => {
    // res.send('Request Recieved');
    try {
        // const id = req.params.id;
        const users = await User.find({name: req.params.name});
        res.status(200).json(users);
        // console.log(user);
    }
    catch (err) {
        console.log(err);
    }
}
export const getUserByRating = async (req, res) => {
    // res.send('Request Recieved');
    try {
        // const id = req.params.id;
        const users = await User.find({rating: req.params.rating});
        res.status(200).json(users);
        // console.log(user);
    }
    catch (err) {
        console.log(err);
    }
}

export const getUserById = async (req, res) => {
    // res.send('Request Recieved');
    try {
        const id = req.params.id;
        const users = await User.findById(id);
        res.status(200).json(users);
        // console.log(user);
    }
    catch (err) {
        console.log(err);
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            return res.status(404).send('User with the given id is not found');
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send('User with the given id is not found');
        }
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (err) {
        console.log(err);
    }
}

// module.exports = {
//     createUser,
//     getAllUser,
//     getUserById,
//     updateUser,
//     deleteUser
// };
