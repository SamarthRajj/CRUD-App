import express from 'express';
import { createUser, getAllUser, getUserById, updateUser, deleteUser, getUserByName, getUserByRating, getUserByEmail } from '../Controllers/user.controller.js';
const router = express.Router();


router.get('/', getAllUser);
router.get('/login/:email', getUserByEmail);
router.get('/name/:name', getUserByName);
router.get('/email/:email', getUserByEmail);
router.get('/rating/:rating', getUserByRating);
router.get('/getUser/:id', getUserById);
router.post('/', createUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

export const userRoutes = router;
