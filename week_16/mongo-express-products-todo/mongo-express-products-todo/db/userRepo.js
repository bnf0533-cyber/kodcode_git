/**
 * User repository — thin wrapper around mongoDB.
 * Unit tests replace these methods with mocks (no real DB).
 */
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from './mongoDB.js'

export const userRepo = {
    create: (...args) => createUser(...args),
    getAll: (...args) => getAllUsers(...args),
    getById: (...args) => getUserById(...args),
    update: (...args) => updateUser(...args),
    remove: (...args) => deleteUser(...args),
}
