import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ["food", "tech", "clothing", "other"] },
    price: { type: Number, min: 0 },
    stock: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
});

const product = mongoose.model("products" , productSchema)
export default product;