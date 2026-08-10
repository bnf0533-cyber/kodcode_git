import assert from "node:assert/strict";
import test, { describe, mock } from "node:test";
import { ObjectId } from "mongodb";
import { createBankRepo } from "./repo/bank.js";
import { createBankService } from "./services/bank.service.js";

describe('UserServiceTest', () => {
    const mockObj = {
        _id: new ObjectId(),
        account_number: "123565456",
        balance: 1000
    }

    const mockCollecetion = {
        findOne: mock.fn(() => mockObj),
        findOneAndUpdate: mock.fn(() => mockObj)
    }

    const bankRepo = createBankRepo(mockCollecetion);
    const bankService = createBankService(bankRepo);

    test('Get money happy path', async () => {
        const result = await bankService.getMoney(200, "5774");
        assert.equal(result, 800)
    })
})