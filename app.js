import express from 'express';
import cors from 'cors';
import globalErrorHandelar from './src/middleware/globalerrorHandelar.js';
import { ProductRouter } from './src/modules/products/products.route.js';

const app = express();

app.use(cors());
app.use(express.json());

// api 

app.use('/api/v1/product',ProductRouter);

// global
app.use(globalErrorHandelar)

export default app;
