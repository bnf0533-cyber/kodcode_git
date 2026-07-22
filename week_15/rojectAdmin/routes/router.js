import express from "express";
import product from "../models/product.js";
import { createProduct, getAllProducts } from "../service/service.dal.js";
const router = express.Router();

router.get("/products", getAllProducts);

router.post("/products", createProduct);

router.get("/products/stats", async (req, res) => {
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

router.patch("/products/:id/stock", async (req, res) => {
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




export default router;
