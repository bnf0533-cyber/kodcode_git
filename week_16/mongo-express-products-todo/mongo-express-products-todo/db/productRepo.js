/**
 * Product repository — thin wrapper around mongoDB.
 * Unit tests replace these methods with mocks (no real DB).
 */
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from './mongoDB.js'

export const productRepo = {
    create: (...args) => createProduct(...args),
    getAll: (...args) => getAllProducts(...args),
    getById: (...args) => getProductById(...args),
    update: (...args) => updateProduct(...args),
    remove: (...args) => deleteProduct(...args),
}
