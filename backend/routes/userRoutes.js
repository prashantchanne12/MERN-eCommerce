import express from 'express';
const userRouter = express.Router();

import { authUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

userRouter.post('/login', authUser);

userRouter.get('/profile', protect, getUserProfile);

export default userRouter;