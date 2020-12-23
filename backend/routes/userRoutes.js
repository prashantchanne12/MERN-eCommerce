import express from 'express';
const userRouter = express.Router();

import { authUser } from '../controllers/userController.js';

userRouter.post('/login', authUser);

export default userRouter;