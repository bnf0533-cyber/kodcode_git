import product from "../models/product.js";

export async function getAllProducts() {
    try {
        const getAllProducts = await product.find({ active: true });
        return getAllProducts;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createProduct(name, category, price, stock, active) {
    try {
        const createProduct = await product.create({
            name,
            category,
            price,
            stock,
            active,
        });
        return createProduct;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getStats() {
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
        return stats;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateProduct(id, amount) {
    try {
        const updateProduct = await product.findByIdAndUpdate(
            id,
            { $inc: { stock: amount } },
            { new: true }
        );
        return updateProduct;
    } catch (error) {
        console.error(error);   
        throw error;
    }
}