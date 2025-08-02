import express from 'express';
import apiRoutes from './routes/api';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

export default app;
