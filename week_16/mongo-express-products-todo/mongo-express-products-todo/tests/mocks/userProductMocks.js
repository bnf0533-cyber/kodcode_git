/*  
 * Named mock implementations for userProductRepo (no MongoDB).
 */

export const MOCK_USER_PRODUCT_ID = '507f1f77bcf86cd799439013'
export const MOCK_USER_ID = '507f1f77bcf86cd799439012'
export const MOCK_PRODUCT_ID = '507f1f77bcf86cd799439011'
export const FAKE_ID = '000000000000000000000000'

export const MOCK_USER_PRODUCT = {
    _id: MOCK_USER_PRODUCT_ID,
    userId: MOCK_USER_ID,
    productId: MOCK_PRODUCT_ID,
}

export async function mockGetAllUserProducts() {
    return [MOCK_USER_PRODUCT]
}

export async function mockGetUserProductById(id) {
    if (String(id) === MOCK_USER_PRODUCT_ID) {
        return MOCK_USER_PRODUCT
    }
    return null
}

export async function mockCreateUserProduct(userProduct) {
    return { _id: MOCK_USER_PRODUCT_ID, ...userProduct }
}

export async function mockUpdateUserProduct(id, updates) {
    if (String(id) !== MOCK_USER_PRODUCT_ID) {
        return null
    }
    return { _id: MOCK_USER_PRODUCT_ID, ...updates }
}

export async function mockDeleteUserProduct(id) {
    return {
        deletedCount: String(id) === MOCK_USER_PRODUCT_ID ? 1 : 0,
    }
}

export async function mockGetUserById(id) {
    if (String(id) === MOCK_USER_ID) {
        return { _id: MOCK_USER_ID, name: 'momo', email: 'momo@example.com', age: 28 }
    }
    return null
}

export async function mockGetProductById(id) {
    if (String(id) === MOCK_PRODUCT_ID) {
        return {
            _id: MOCK_PRODUCT_ID,
            name: 'laptop',
            price: 550,
            category: 'electronics',
            instock: true,
        }
    }
    return null
}
