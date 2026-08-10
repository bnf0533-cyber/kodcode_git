import express from 'express';
import { connectDB } from './db/config.config.js';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'hello from server' });
});

connectDB().then(() => {
    app.listen(3000, () => {
        console.log("server running");
    });
});