import express from 'express';
const productRouter = express.Router();
import {
    getProductById,
    getProducts,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview
} from '../controllers/productController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);
productRouter.post('/:id/reviews', protect, createProductReview);

// Admin
productRouter.delete('/:id', protect, admin, deleteProduct);
productRouter.post('/', protect, admin, createProduct);
productRouter.put('/:id', protect, admin, updateProduct);



export default productRouter;
