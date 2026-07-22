import {
    createProduct,
    getAllProducts,
    getStats,
    updateProduct,
} from "../service/service.dal.js";

export const handleCreateProduct = async (req, res) => {
    try {
        const { name, category, price, stock, active } = req.body;
        const newProduct = await createProduct(name, category, price, stock, active);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const handleGetAllProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const handleGetStats = async (req, res) => {
    try {
        const stats = await getStats();
        res.status(200).json(stats);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const handleUpdateProduct = async (req, res) => {
    try {
        const { amount } = req.body;
        const { id } = req.params;
        const updated = await updateProduct(id, amount);
        res.status(200).json(updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
