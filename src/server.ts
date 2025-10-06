import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

app.get('/api/health', (req: Request, res: Response) => {
    res.json({ message: 'OK! backend is running' });
});

const startServer = async () => {
    try {
        // Connect to database
        await connectDB();
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

startServer();