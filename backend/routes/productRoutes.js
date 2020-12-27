import express from 'express';
const productRouter = express.Router();
import {
    getProductById,
    getProducts,
    deleteProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);

// Admin
productRouter.delete('/:id', protect, admin, deleteProduct);


export default productRouter;
