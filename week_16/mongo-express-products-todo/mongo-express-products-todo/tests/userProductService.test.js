/**
 * Unit tests for userProductService — mocks repos (no MongoDB).
 * UserProduct connects userId ↔ productId.
 *
 * Run: npm test
 */

import { describe, it, beforeEach, afterEach, mock } from "node:test";
import assert from "node:assert/strict";
import { userProductRepo } from "../db/userProductRepo.js";
import { userRepo } from "../db/userRepo.js";
import { productRepo } from "../db/productRepo.js";
import {
    createUserProduct,
    deleteUserProduct,
    getUserProduct,
    listUserProducts,
    updateUserProduct,
} from "../services/userProductService.js";
import {
    MOCK_USER_PRODUCT_ID,
    MOCK_USER_ID,
    MOCK_PRODUCT_ID,
    mockGetAllUserProducts,
    mockGetUserProductById,
    mockCreateUserProduct,
    mockUpdateUserProduct,
    mockDeleteUserProduct,
    mockGetUserById,
    mockGetProductById,
    MOCK_USER_PRODUCT,
    FAKE_ID,
} from "./mocks/userProductMocks.js";
import { userInfo } from "node:os";

describe("userProductService (unit)", () => {
    beforeEach(() => {
        // mock.method — replaces the real repo method with a fake (auto-restored after each test)
        mock.method(userProductRepo, "create", mockCreateUserProduct);
        mock.method(userProductRepo, "getAll", mockGetAllUserProducts);
        mock.method(userProductRepo, "getById", mockGetUserProductById);
        mock.method(userProductRepo, "update", mockUpdateUserProduct);
        mock.method(userProductRepo, "remove", mockDeleteUserProduct);
        mock.method(userRepo, "getById", mockGetUserById);
        mock.method(productRepo, "getById", mockGetProductById);
    });

    afterEach(() => {
        mock.restoreAll();
    });

    it("createUserProduct  connects user to product and returns _id", async () => {
        const userProduct = await createUserProduct({
            userId: MOCK_USER_ID,
            productId: MOCK_PRODUCT_ID,
        });

        assert.equal(userProduct.userId, MOCK_USER_ID);
        assert.equal(userProduct.productId, MOCK_PRODUCT_ID);
        assert.equal(userProduct._id, MOCK_USER_PRODUCT_ID);
        assert.equal(userRepo.getById.mock.callCount(), 1);
        assert.equal(productRepo.getById.mock.callCount(), 1);
        assert.equal(userProductRepo.create.mock.callCount(), 1);
    });

    // ---------- TODO: implement service method, then replace each it.todo ----------
    it("createUserProduct  throws createError 400 if body is missing fields", async () => {
        try {
            await createUserProduct({ userId: MOCK_USER_ID });
        } catch (error) {
            assert.equal(error.status, 400);
            assert.equal(error.message, "bad request");
            assert.equal(userProductRepo.create.mock.callCount(), 0);
        }
    });
    it("createUserProduct  throws createError 400 if id is not valid", async () => {
        try {
            await createUserProduct({
                userId: "FAKE_ID",
                productId: MOCK_PRODUCT_ID,
            });
        } catch (error) {
            assert.equal(error.status, 400);
            assert.equal(error.message, "invalid id");
            assert.equal(userProductRepo.create.mock.callCount(), 0);
        }
    });
    it("createUserProduct  throws createError 404 if user does not exist", async () => {
        try {
            await createUserProduct({
                userId: FAKE_ID,
                productId: MOCK_PRODUCT_ID,
            });
        } catch (error) {
            assert.equal(error.status, 404);
            assert.equal(error.message, "user not found");
            assert.equal(userProductRepo.create.mock.callCount(), 0);
        }
    });
    it("createUserProduct  throws createError 404 if product does not exist", async () => {
        try {
            await createUserProduct({
                userId: MOCK_USER_ID,
                productId: FAKE_ID,
            });
        } catch (error) {
            assert.equal(error.status, 404);
            assert.equal(error.message, "product not found");
            assert.equal(userProductRepo.create.mock.callCount(), 0);
        }
    });
    it("listUserProducts  returns a list of userProducts", async () => {
        const result = await listUserProducts();
        assert.equal(Array.isArray(result), true);
        assert.equal(result.length, 1);
        assert.equal(result[0]._id, MOCK_USER_PRODUCT_ID);
        assert.equal(userProductRepo.getAll.mock.callCount(), 1);
    });
    it("getUserProduct  returns one userProduct by id", async () => {
        const result = await getUserProduct(MOCK_USER_PRODUCT_ID);
        assert.equal(result._id, MOCK_USER_PRODUCT_ID);
        assert.equal(userProductRepo.getById.mock.callCount(), 1);
    });
    it("getUserProduct  throws createError 400 if id is not valid", async () => {
        try {
            await getUserProduct("FAKE_ID");
        } catch (error) {
            assert.equal(error.status, 400);
        }
    });
    it("getUserProduct  throws createError 404 if userProduct does not exist", async () => {
        try {
            await getUserProduct(FAKE_ID);
        } catch (error) {
            assert.equal(error.status, 404);
        }
    });
    it("updateUserProduct  returns updated  userProduct", async () => {
        const result = await updateUserProduct(
            MOCK_USER_PRODUCT_ID,
            MOCK_USER_PRODUCT
        );
        assert.equal(result._id, MOCK_USER_PRODUCT_ID);
        assert.equal(userProductRepo.update.mock.callCount(), 1);
    });
    it("updateUserProduct  throws createError 400 if id is not valid", async () => {
        try {
            await updateUserProduct("FAKE_ID", MOCK_USER_PRODUCT);
        } catch (error) {
            assert.equal(error.status, 400);
        }
    });
    it("updateUserProduct  throws createError 400 if body is missing fields", async () => {
        try {
            await updateUserProduct(MOCK_USER_PRODUCT_ID, "MOCK_PRODUCT_ID");
        } catch (error) {
            assert.equal(error.status, 400);
        }
    });
    it("updateUserProduct  throws createError 400 if id is not valid (body)", async () => {
        try {
            await updateUserProduct(FAKE_ID, {
                userId: "FAKE_ID",
                productId: MOCK_PRODUCT_ID,
            });
        } catch (error) {
            assert.equal(error.status, 400);
            assert.equal(error.message, "invalid id");
        }
    });
    it("updateUserProduct  throws createError 404 if user does not exist", async () => {
        try {
            await updateUserProduct(FAKE_ID, {
                userId: MOCK_USER_ID,
                productId: MOCK_PRODUCT_ID,
            });
        } catch (error) {
            assert.equal(error.status, 404);
        }
    });
    it("updateUserProduct  throws createError 404 if product does not exist", async () => {
        try {
            await updateUserProduct(MOCK_USER_PRODUCT_ID, {
                userId: MOCK_USER_ID,
                productId: FAKE_ID,
            });
        } catch (error) {
            assert.equal(error.status, 404);
        }
    });
    it("updateUserProduct  throws createError 404 if userProduct does not exist", async () => {
        try {
            await updateUserProduct(FAKE_ID, {
                userId: MOCK_USER_ID,
                productId: MOCK_PRODUCT_ID,
            });
        } catch (error) {
            assert.equal(error.status, 404);
            assert.equal(error.message,'userProduct not found')
        }
    });
    it("deleteUserProduct  deletes a userProduct", async () => {
        const result = await deleteUserProduct(MOCK_USER_PRODUCT_ID);
        assert.equal(result.deletedCount, 1);
    });
    it("deleteUserProduct  throws createError 400 if id is not valid", async () => {
        try {
            await deleteUserProduct("MOCK_USER_ID");
        } catch (error) {
            assert.equal(error.status, 400);
        }
    });
    it("deleteUserProduct  throws createError 404 if userProduct does not exist", async () => {
        try {
            await deleteUserProduct(FAKE_ID);
        } catch (error) {
            assert.equal(error.status, 404);
        }
    });
});
