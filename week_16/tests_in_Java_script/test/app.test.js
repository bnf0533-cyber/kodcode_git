import { describe, it, test } from "node:test";
import { add, isEven } from "../app.js";
import assert from "node:assert/strict";

describe('calculator unit test', () => {
    test('add function retune sum of two argument', () => {
        const res = add(3,4)
        assert.equal(res, 7)
    })
test('add throws error if one arg is not a number', () => {
    assert.throws(() => (add('a',3),{message : 'args must be a number'}))
}) 
})

describe("isEvn" , () => {
    it("return true to the evn number" , () => {
        assert.strictEqual(isEven(4),true)
    })
    it("return false to the odd number", () => {
        assert.strictEqual(isEven(5),false)
    })
})