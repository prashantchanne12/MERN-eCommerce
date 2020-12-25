import express from 'express';
const orderRouter = express.Router();
import { addOrderItems, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

orderRouter.post('/', protect, addOrderItems);
orderRouter.get('/:id', protect, getOrderById);

export default orderRouter;