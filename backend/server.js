import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

// Routers
import productRoutes from './routes/productRoutes.js';

// Middlewares
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();



app.get('/', (req, res, next) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);

// Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));