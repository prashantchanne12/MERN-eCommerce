import express from 'express';
const orderRouter = express.Router();
import { addOrderItems } from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

orderRouter.post('/', protect, addOrderItems);

export default orderRouter;