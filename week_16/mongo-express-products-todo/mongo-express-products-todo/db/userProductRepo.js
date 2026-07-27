/**
 * UserProduct repository — connects a user to a product.
 * Unit tests replace these methods with mocks (no real DB).
 */
import {
    getAllUserProducts,
    getUserProductById,
    createUserProduct,
    updateUserProduct,
    deleteUserProduct,
} from './mongoDB.js'

export const userProductRepo = {
    create: (...args) => createUserProduct(...args),
    getAll: (...args) => getAllUserProducts(...args),
    getById: (...args) => getUserProductById(...args),
    update: (...args) => updateUserProduct(...args),
    remove: (...args) => deleteUserProduct(...args),
}
