const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res, next) => {
    res.send('API is running');
});

app.get('/api/products', (req, res, next) => {
    res.json(products);
});

app.get('/api/product/:id', (req, res, next) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
});

app.listen(5000, console.log('Server running on port 5000'));