import express from "express";
import {
    createProduct,
    getAllProducts,
    getStats,
    updateProduct,
} from "../ctrl/controller.js";
const router = express.Router();

router.get("/products", getAllProducts);

router.post("/products", createProduct);

router.get("/products/stats", getStats);

router.patch("/products/:id/stock", updateProduct);




export default router;
