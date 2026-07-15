import express from 'express';
const app = express();

app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(3000, () => {
    console.log("Express server running on port 3000");
});