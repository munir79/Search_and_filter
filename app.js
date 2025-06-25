import express from 'express';
import cors from 'cors';
import globalErrorHandelar from './src/middleware/globalerrorHandelar.js';
import { ProductRouter } from './src/modules/products/products.route.js';
import { BlogRouter } from './src/modules/blogs/blogs.route.js';
import { globalSearchRouter } from './src/modules/search/search.route.js';

const app = express();

app.use(cors());
app.use(express.json());

// api

app.use('/api/v1/product', ProductRouter);
app.use('/api/v1/blog', BlogRouter);
app.use('/api/v1/globalsearc', globalSearchRouter);

// global
app.use(globalErrorHandelar);

export default app;
