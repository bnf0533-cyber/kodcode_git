import { describe, it } from "node:test";
import { isEven, max, average, toTitleCase, filterEven } from "./math.js";
import assert from "node:assert/strict";

describe("isEven", () => {
    it("return true to the even number", () => {
        assert(isEven(4), true);
    });
    it("return false to the odd number", () => {
        assert.strictEqual(isEven(5), false);
    });
    it("return false to the even number", () => {
        assert.strictEqual(isEven(9), false);
    });
});

describe("max", () => {
    it("return 3 if both is positive", () => {
        assert.strictEqual(max(2, 3), 3);
    });
    it("return 2 if one is negative", () => {
        assert(max(2, -3), 2);
    });
    it("return 3 if both is equal", () => {
        assert(max(3, 3), 3);
    });
});

describe("average", () => {
    it("return 2 if average is correct", () => {
        assert.strictEqual(average([1, 2, 3]), 2);
    });
    it("return 10 if length of list is one", () => {
        assert.strictEqual(average([10]), 10);
    });
    it("return error if list is empty", () => {
        assert.throws(() => average([]), { message: "the list is empty and cannot div by zero" });
    });
});

describe("toTitleCase", () => {
    it("return Hello World if the string is correct", () => {
        assert.strictEqual(toTitleCase("hello world"), "Hello World");
    });
    it("return '' if the string is empty", () => {
        assert.strictEqual(toTitleCase(""), "");
    });
    it("return Hello if the string is correct", () => {
        assert.strictEqual(toTitleCase("hello"), "Hello");
    });
});

describe("filterEven", () => {
    it("return [1,3,5,7,9] if the list correct", () => {
        assert.deepStrictEqual(filterEven([1, 2, 3, 8, 5, 7,9]),[2,8]);
    });
    it("return list of even number if the list correct", () => {
        assert.deepStrictEqual(filterEven([1,3,5,7,9]),[])
    });
    it("return empty list if the list correct", () => {
        assert.deepStrictEqual(filterEven([]),[])
    })
});
