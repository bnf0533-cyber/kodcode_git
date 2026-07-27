import { ObjectId } from "../db/mongoDB.js";
import { productRepo } from "../db/productRepo.js";
import { createError } from "./createError.js";

export function isValidProductBody({ name, price, category, instock }) {
    return (
        name !== undefined &&
        price !== undefined &&
        category !== undefined &&
        instock !== undefined
    );
}

export async function listProducts() {
    // TODO: return productRepo.getAll()
    return productRepo.getAll();
}

export async function getProduct(id) {
    // TODO: invalid id  throw createError(400, 'invalid id')
    if (!ObjectId.isValid(id)) throw createError(400, "invalid id");
    // TODO: not found  throw createError(404, 'product not found')
    const product = await productRepo.getById(id);
    if (!product) throw createError(404, "product not found");
    // TODO: return productRepo.getById(id)
    return product;
}

// EXAMPLE: createProduct is fully implemented (route  service  repo  mongoDB)
export async function createProduct(body) {
    if (!isValidProductBody(body)) {
        throw createError(400, "bad request");
    }
    return productRepo.create(body);
}

export async function updateProduct(id, body) {
    // TODO: invalid id / bad body / not found / return updated
    if (!ObjectId.isValid(id)) throw createError(400, "invalid id");
    if (!isValidProductBody(body)) throw createError(400, "bad request");
    const product = await productRepo.getById(id);
    if (!product) throw createError(404, "product not found");
    return productRepo.update(id, body);
}

export async function deleteProduct(id) {
    // TODO: invalid id / not found / return ok when deleted
    if (!ObjectId.isValid(id)) throw createError(400, "invalid id");
    const product = await productRepo.remove(id);
    if (!product || product.deletedCount === 0)
        throw createError(404, "product not found");
    return product;
}

export { ObjectId };
