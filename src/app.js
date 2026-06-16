import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoutes from './routes/user.js';
import productRoutes from './routes/product.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/order.js';

dotenv.config();

const app = express();

// ========== Middleware ==========
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));

// ========== Health Check ==========
app.get('/health', (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Ecommerce server is running perfectly...',
        timestamp: new Date()
    });
});

// ========== API Routes ==========
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// ========== 404 Handler ==========
app.use((req, res) => {
    return res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`
    });
});

// ========== Error Handler ==========
app.use((err, req, res, next) => {
    console.error('Error:', err);
    return res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

export default app;