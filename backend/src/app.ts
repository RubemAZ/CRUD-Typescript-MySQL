import express from 'express';
import customerRoutes from './routes/customer.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/customers', customerRoutes);

export default app;