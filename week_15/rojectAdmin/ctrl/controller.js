import * as service from "../service/service.dal.js";

export const createProduct = async (req, res) => {
    try {
        const { name, category, price, stock, active } = req.body;
        const newProduct = await service.createProduct(name, category, price, stock, active);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await service.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
    }
};

export const getStats = async (req, res) => {
    try {
        const stats = await service.getStats();
        res.status(200).json(stats);
    } catch (error) {
        console.error(error);
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { amount } = req.body;
        const { id } = req.params;
        const updated = await service.updateProduct(id, amount);
        res.status(200).json(updated);
    } catch (error) {
        console.error(error);
    }
};
