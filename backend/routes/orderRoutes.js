import express from 'express';
const orderRouter = express.Router();
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
    getAllOrders,
    updateOrderToDelivered,
} from '../controllers/orderController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

orderRouter.post('/', protect, addOrderItems);
orderRouter.get('/myorders', protect, getMyOrders);
orderRouter.get('/:id', protect, getOrderById);
orderRouter.put('/:id/pay', protect, updateOrderToPaid);

// Admin only
orderRouter.get('/', protect, admin, getAllOrders);
orderRouter.put('/:id/deliver', protect, admin, updateOrderToDelivered);

export default orderRouter;