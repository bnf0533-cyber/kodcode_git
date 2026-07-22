import express from "express";
import {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetStats,
    handleUpdateProduct,
} from "../ctrl/controller.js";
const router = express.Router();

router.get("/products", handleGetAllProducts);

router.post("/products", handleCreateProduct);

router.get("/products/stats", handleGetStats);

router.patch("/products/:id/stock", handleUpdateProduct);




export default router;
