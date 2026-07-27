/**
 * Named mock implementations for userRepo (no MongoDB).
 */

export const MOCK_USER_ID = '507f1f77bcf86cd799439012'

export const USER_BODY = {
    name: 'momo',
    email: 'momo@example.com',
    age: 28,
}

export const MOCK_USER = {
    _id: MOCK_USER_ID,
    ...USER_BODY,
}

export async function mockGetAllUsers() {
    return [MOCK_USER]
}

export async function mockGetUserById(id) {
    if (String(id) === MOCK_USER_ID) {
        return MOCK_USER
    }
    return null
}

export async function mockCreateUser(user) {
    return { _id: MOCK_USER_ID, ...user }
}

export async function mockUpdateUser(id, updates) {
    if (String(id) !== MOCK_USER_ID) {
        return null
    }
    return { _id: MOCK_USER_ID, ...updates }
}

export async function mockDeleteUser(id) {
    return {
        deletedCount: String(id) === MOCK_USER_ID ? 1 : 0,
    }
}
