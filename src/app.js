import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.js';
import productRoutes from './routes/product.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/order.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve frontend files


app.get("/health", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Ecommerce server is running perfectly..."
    })
});


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

export default app;
