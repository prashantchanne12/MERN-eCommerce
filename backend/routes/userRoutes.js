import express from 'express';
const userRouter = express.Router();

import {
    authUser,
    getUserProfile,
    getUsers,
    registerUser,
    updateUserProfile,
    deleteUser,
    getUserById,
    updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

userRouter.post('/', registerUser);
userRouter.post('/login', authUser);

userRouter.get('/profile', protect, getUserProfile);
userRouter.put('/profile', protect, updateUserProfile);

// Admin Only
userRouter.get('/', protect, admin, getUsers);
userRouter.delete('/:id', protect, admin, deleteUser);
userRouter.get('/:id', protect, admin, getUserById);
userRouter.put('/:id', protect, admin, updateUser);



export default userRouter;