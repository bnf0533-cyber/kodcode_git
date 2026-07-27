/**
 * Named mock implementations for productRepo (no MongoDB).
 */

export const MOCK_PRODUCT_ID = '507f1f77bcf86cd799439011'
export const FAKE_DATA = {name : "just-name"}
export const PRODUCT_BODY = {
    name: 'laptop',
    price: 550,
    category: 'electronics',
    instock: true,
}

export const MOCK_PRODUCT = {_id: MOCK_PRODUCT_ID, ...PRODUCT_BODY}

export async function mockGetAllProducts() {
    return [MOCK_PRODUCT]
}

export async function mockGetProductById(id) {
    if (String(id) === MOCK_PRODUCT_ID) {
        return MOCK_PRODUCT
    }
    return null
}

export async function mockCreateProduct(product) {
    return { _id: MOCK_PRODUCT_ID, ...product }
}

export async function mockUpdateProduct(id, updates) {
    if (String(id) !== MOCK_PRODUCT_ID) {
        return null
    }
    return { _id: MOCK_PRODUCT_ID, ...updates }
}

export async function mockDeleteProduct(id) {
    return {
        deletedCount: String(id) === MOCK_PRODUCT_ID ? 1 : 0,
    }
}
