import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res, next) => {

    const products = await Product.find({});
    res.json(products);
});


// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }

});

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (product) {
        await product.remove();
        res.send({ message: 'Product Removed' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }

});

// @desc Put a product
// @route POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res, next) => {

    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'sample brand',
        category: 'sample category',
        countInStock: 0,
        numReviews: 0,
        rating: 0,
        description: 'Sample description'
    });

    const createdProduct = await product.save();
    res.status(201).send(createdProduct);

});

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res, next) => {

    const {
        name,
        price,
        description,
        image,
        brand,
        category,
        countInStock,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {

        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;


        const updatedProduct = await product.save();
        res.status(201).send(updatedProduct);

    } else {
        res.status(404);
        throw new Error('Product Not Found!');
    }

});

export {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
}