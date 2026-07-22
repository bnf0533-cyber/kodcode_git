import express from "express";
import "./db/db.js";
import product from "./models/product.js";

const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
    try {
        const getAllProducts = await product.find({ active: true });
        res.status(200).json(getAllProducts);
    } catch (error) {
        console.error(error);
    }
});

app.post("/products", async (req, res) => {
    try {
        const { name, category, price, stock, active } = req.body;
        const createProduct = await product.create(req.body);
        res.status(201).json(createProduct);
    } catch (error) {
        console.error(error);
    }
});

app.get("/products/stats", async (req, res) => {
    try {
        const stats = await product.aggregate([
            { $match: { active: true } },
            {
                $group: {
                    _id: "$category",
                    count: { $sum: 1 },
                    avgPrice: { $avg: "$price" },
                    totalStock: { $sum: "$stock" },
                },
            },
            { $sort: { count: -1 } },
        ]);
        res.status(200).json(stats);
    } catch (error) {
        console.error(error);
    }
});

app.patch("/products/:id/stock", async (req, res) => {
    try {
        const { amount } = req.body;
        const { id } = req.params;
        const updateProduct = await product.findByIdAndUpdate(
            id,
            { $inc: { stock: amount } },
            { new: true }
        );
        res.status(200).json(updateProduct);
    } catch (error) {
        console.error(error);
    }
});

app.listen(process.env.PORT, () => {
    console.log("server running...");
});
