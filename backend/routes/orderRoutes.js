import express from 'express';
const orderRouter = express.Router();
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders
} from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

orderRouter.post('/', protect, addOrderItems);
orderRouter.get('/myorders', protect, getMyOrders);
orderRouter.get('/:id', protect, getOrderById);
orderRouter.put('/:id/pay', protect, updateOrderToPaid);

export default orderRouter;