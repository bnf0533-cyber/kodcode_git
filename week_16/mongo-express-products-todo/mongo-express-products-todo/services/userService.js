import { ObjectId } from '../db/mongoDB.js'
import { userRepo } from '../db/userRepo.js'
import { createError } from './createError.js'

export function isValidUserBody({ name, email, age }) {
    return (
        name !== undefined &&
        email !== undefined &&
        age !== undefined
    )
}
export async function createUser(body) {
    if (!isValidUserBody(body)) {
        throw createError(400, 'bad request')
    }
    return userRepo.create(body)
}

export async function listUsers() {
    // TODO: return userRepo.getAll()
    return await userRepo.getAll()
}

export async function getUser(id) {
    // TODO: invalid id  throw createError(400, 'invalid id')
    if (! ObjectId.isValid(id)) throw createError(400 , 'invalid id')
    // TODO: not found  throw createError(404, 'user not found')
    const result = await userRepo.getById(id)
    if (!result) throw createError(404 , 'user not found')
    // TODO: return userRepo.getById(id)
    return result
}



export async function updateUser(id, body) {
    // TODO: invalid id / bad body / not found / return updated
    if (!ObjectId.isValid(id)) throw createError(400 , 'invalid id')
    if (!isValidUserBody(body)) throw createError(400 , 'bad request')
    const result = await userRepo.update(id , body)
    if (!result) throw createError(404 , 'user not found')
    return result
}

export async function deleteUser(id) {
    // TODO: invalid id / not found / return ok when deleted
    if (!ObjectId.isValid(id)) throw createError(400,'invalid id')
    const result = await userRepo.remove(id)
    if (!result || result.deletedCount === 0) throw createError(404 , 'user not found')
    return result
}

export { ObjectId }
