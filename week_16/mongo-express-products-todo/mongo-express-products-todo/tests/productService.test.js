/**
 * Unit tests for productService — mock.method replaces real productRepo methods.
 * No MongoDB, no Express.
 *
 * YOUR JOB: implement services/ (+ db/mongoDB.js for npm start).
 * Run: npm test
 */

import { describe, it, beforeEach, afterEach, mock } from "node:test";
import assert from "node:assert/strict";
import { productRepo } from "../db/productRepo.js";
import {
    createProduct,
    listProducts,
    getProduct,
    deleteProduct,
    updateProduct,
} from "../services/productService.js";
import {
    MOCK_PRODUCT_ID,
    PRODUCT_BODY,
    mockGetAllProducts,
    mockGetProductById,
    mockCreateProduct,
    mockUpdateProduct,
    mockDeleteProduct,
    FAKE_DATA,
} from "./mocks/productMocks.js";
import e from "express";
import { error } from "node:console";
import { errorMonitor } from "node:events";

describe("productService (unit)", () => {
    beforeEach(() => {
        // mock.method — replaces the real repo method with a fake (auto-restored after each test)
        mock.method(productRepo, "create", mockCreateProduct);
        mock.method(productRepo, "getAll", mockGetAllProducts);
        mock.method(productRepo, "getById", mockGetProductById);
        mock.method(productRepo, "update", mockUpdateProduct);
        mock.method(productRepo, "remove", mockDeleteProduct);
    });

    afterEach(() => {
        mock.restoreAll();
    });

    it("createProduct  returns product with _id", async () => {
        const product = await createProduct(PRODUCT_BODY);

        assert.equal(product.name, PRODUCT_BODY.name);
        assert.equal(product.price, PRODUCT_BODY.price);
        assert.equal(product._id, MOCK_PRODUCT_ID);
        assert.equal(productRepo.create.mock.callCount(), 1);
    });

    // ---------- TODO: implement service method, then replace each it.todo ----------
    it("createProduct  throws createError 400 if body is missing fields", async () => {
        let error = null;
        try {
            await createProduct(FAKE_DATA);
        } catch (err) {
            error = err;
        }
        assert.ok(error, "failed should throw when body is missing");
        assert.equal(error.status, 400, "fail status should be 400");
        assert.equal(error.message, "bad request");
        assert.equal(
            productRepo.create.mock.callCount(),
            0,
            "fail should not be called"
        );
    });
    it("listProducts  returns a list of products", async () => {
        const products = await listProducts();
        assert.equal(Array.isArray(products), true);
        assert.equal(products.length, 1);
        assert.equal(productRepo.getAll.mock.callCount(), 1);
    });
    it("getProduct  returns one product by id", async () => {
        const product = await getProduct(MOCK_PRODUCT_ID);
        assert.equal(product._id, MOCK_PRODUCT_ID);
        assert.equal(productRepo.getById.mock.callCount(), 1);
    });
    it("getProduct  throws createError 400 if id is not valid", async () => {
        try {
            await getProduct("invalid-id");
        } catch (error) {
            assert.ok(error);
            assert.equal(error.status, 400);
            assert.equal(error.message, "invalid id");
            assert.equal(productRepo.getById.mock.callCount(), 0);
        }
    });
    it("getProduct  throws createError 404 if product does not exist", async () => {
        try {
            await getProduct("507f1f77bcf86cd799439099");
        } catch (error) {
            assert.equal(error.status, 404);
            assert.equal(error.message, "product not found");
            assert.equal(productRepo.getById.mock.callCount(), 1);
        }
    });
    it("updateProduct  returns updated product", async () => {
        const product = await updateProduct(MOCK_PRODUCT_ID, PRODUCT_BODY);
        assert.equal(product._id, MOCK_PRODUCT_ID);
        assert.equal(product.name, PRODUCT_BODY.name);
        assert.equal(productRepo.update.mock.callCount(), 1);
    });
    it("updateProduct  throws createError 400 if id is not valid", async () => {
        try {
            await updateProduct("invalid-id", PRODUCT_BODY);
        } catch (error) {
            assert.equal(error.status, 400);
            assert.equal(error.message, "invalid id");
        }
        assert.equal(productRepo.update.mock.callCount(), 0);
    });
    it("updateProduct  throws createError 400 if body is missing fields", async () => {
        try {
            await updateProduct(MOCK_PRODUCT_ID, FAKE_DATA);
        } catch (error) {
            assert.equal(error.status, 400);
            assert.equal(error.message, "bad request");
        }
        assert.equal(productRepo.update.mock.callCount(), 0);
    });
    it("updateProduct  throws createError 404 if product does not exist", async () => {
        try {
            assert.equal(
                await updateProduct("507f1f77bcf86cd799439099", PRODUCT_BODY),
                "product not found"
            );
        } catch (error) {
            assert.equal(error.status, 404);
            assert.equal(error.message, "product not found");
        }
    });
    it("deleteProduct  deletes a product", async () => {
        const result = await deleteProduct(MOCK_PRODUCT_ID);
        assert.equal(result.deletedCount, 1);
        assert.equal(productRepo.remove.mock.callCount(), 1);
    });
    it(
        "deleteProduct  throws createError 400 if id is not valid",
        async () => {
            try {
                await deleteProduct("invalid id");
            } catch (error) {
                assert.equal(error.status, 400);
                assert.equal(error.message,'invalid id');
            }
            assert.equal(productRepo.remove.mock.callCount(),0)
        }
    );
    it("deleteProduct  throws createError 404 if product does not exist", async ()=>{
        try {
            await deleteProduct('507f1f77bcf86cd799439099')
        } catch (error) {
            assert.equal(error.status,404)
            assert.equal(error.message,'product not found')
        }
    });
});
