import express from 'express';
const userRouter = express.Router();

import {
    authUser,
    getUserProfile,
    getUsers,
    registerUser,
    updateUserProfile
} from '../controllers/userController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

userRouter.post('/', registerUser);
userRouter.get('/', protect, admin, getUsers);
userRouter.post('/login', authUser);
userRouter.get('/profile', protect, getUserProfile);
userRouter.put('/profile', protect, updateUserProfile);

export default userRouter;