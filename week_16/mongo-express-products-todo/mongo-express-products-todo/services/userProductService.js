import { ObjectId } from "../db/mongoDB.js";
import { userProductRepo } from "../db/userProductRepo.js";
import { userRepo } from "../db/userRepo.js";
import { productRepo } from "../db/productRepo.js";
import { createError } from "./createError.js";

export function isValidUserProductBody({ userId, productId }) {
    return userId !== undefined && productId !== undefined;
}

// EXAMPLE: createUserProduct connects an existing user to an existing product
export async function createUserProduct(body) {
    if (!isValidUserProductBody(body)) {
        throw createError(400, "bad request");
    }
    const { userId, productId } = body;
    if (!ObjectId.isValid(userId) || !ObjectId.isValid(productId)) {
        throw createError(400, "invalid id");
    }
    const user = await userRepo.getById(userId);
    if (!user) {
        throw createError(404, "user not found");
    }
    const product = await productRepo.getById(productId);
    if (!product) {
        throw createError(404, "product not found");
    }
    return userProductRepo.create({ userId, productId });
}

export async function listUserProducts() {
    // TODO: return userProductRepo.getAll()
    return userProductRepo.getAll();
}

export async function getUserProduct(id) {
    // TODO: invalid id  throw createError(400, 'invalid id')
    if (!ObjectId.isValid(id)) throw createError(400, "invalid id");
    // TODO: not found  throw createError(404, 'userProduct not found')
    const result = await userProductRepo.getById(id);
    if (!result) throw createError(404, "userProduct not found");
    // TODO: return userProductRepo.getById(id)
    return result
}

export async function updateUserProduct(id, body) {
    // TODO: invalid id / bad body / user|product not found / return updated
    if (!ObjectId.isValid(id)) throw createError(400,'invalid id')
    if (!isValidUserProductBody(body)) throw createError(400 , 'bad request')
    const {userId ,productId} = body
    if (!ObjectId.isValid(userId) || !ObjectId.isValid(productId)) throw createError(400 , 'invalid id')
    if(!await userRepo.getById(userId)) throw createError(404 , 'user not found')
    if(!await productRepo.getById(productId)) throw createError (404 , 'product not found')
    const result = await userProductRepo.update(id,body)
    if (!result || result.updatedCount === 0) throw createError(404 , 'userProduct not found')
    return result
    }

export async function deleteUserProduct(id) {
    // TODO: invalid id / not found / return ok when deleted
    if (!ObjectId.isValid(id)) throw createError(400, 'invalid id')
    const result = await userProductRepo.remove(id)
    if (!result || result.deletedCount === 0) throw createError(404 , 'userProduct not found')
    return result
    }

export { ObjectId };
