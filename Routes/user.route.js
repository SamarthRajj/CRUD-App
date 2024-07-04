import express from 'express';
import { createUser, getAllUser, getUserById, updateUser, deleteUser } from '../Controllers/user.controller.js';
const router = express.Router();


router.get('/', getAllUser);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export const userRoutes = router;
