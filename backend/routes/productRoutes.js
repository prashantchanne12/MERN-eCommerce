import express from 'express';
import asyncHandler from 'express-async-handler';
const productRouter = express.Router();
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
productRouter.get('/', asyncHandler(async (req, res, next) => {
    const products = await Product.find({});
    res.json(products);
}));

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
productRouter.get('/:id', asyncHandler(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }

}));


export default productRouter;
