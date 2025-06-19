import express from 'express';
import cors from 'cors';
import globalErrorHandelar from './src/middleware/globalerrorHandelar.js';

const app = express();

app.use(cors());
app.use(express.json());


app.use(globalErrorHandelar)

export default app;
