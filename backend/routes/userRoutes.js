import express from 'express';
const userRouter = express.Router();

import { authUser, getUserProfile, registerUser } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

userRouter.post('/', registerUser);
userRouter.post('/login', authUser);
userRouter.get('/profile', protect, getUserProfile);

export default userRouter;