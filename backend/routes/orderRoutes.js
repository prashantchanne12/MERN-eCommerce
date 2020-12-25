import express from 'express';
const orderRouter = express.Router();
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid
} from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

orderRouter.post('/', protect, addOrderItems);
orderRouter.get('/:id', protect, getOrderById);
orderRouter.put('/:id/pay', protect, updateOrderToPaid);

export default orderRouter;