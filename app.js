import dotenv from 'dotenv';
dotenv.config(); 
import express from 'express';
import healthRouter from './controllers/healthCheck.js'; 
import responseRouter from './controllers/responseGenerator.js';
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use('/health', healthRouter); 
app.use('/response', responseRouter);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
}); 