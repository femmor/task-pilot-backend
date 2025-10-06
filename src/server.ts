import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

app.get('/api/health', (req: Request, res: Response) => {
    res.json({ message: 'OK! backend is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});