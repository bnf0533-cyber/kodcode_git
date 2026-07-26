import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { calculateDiscount,applyTax,calculateCartTotal, validatePrice, formatPrice } from "./store-calc.js";

describe("calculator discount", () => {
    it("return 80 if the discount is 20", () => {
        assert.strictEqual(calculateDiscount(100,20),80)
    })
    it("return 100 if the discount is 0", () => {
        assert.strictEqual(calculateDiscount(100,0),100)
    })
    it("return false if the discount is negative", () => {
        assert.strictEqual(calculateDiscount(100,-20),false)
    })
})

describe("apply Tax", () => {
    it("return 120 if the tax is 20", () => {
        assert.strictEqual(applyTax(100,0.20),120)
    })
    it("return 100 if the tax is 0", () => {
        assert.strictEqual(applyTax(100,0),100)
    })
    it("return false if the discount is negative", () => {
        assert.strictEqual(applyTax(100,-20),false)
    })
})

describe("calculator cart total", () => {
    it("return 20 if the quantity is 2", () => {
        assert.deepStrictEqual(calculateCartTotal([{ "price": 10, "quantity" : 2 }]),20)
    })
    it("return 0 if the quantity is 0", () => {
        assert.deepStrictEqual(calculateCartTotal([{ "price": 15, "quantity" : 0 }]),0)
    })
    it("return false if the quantity is negative", () => {
        assert.throws(() => calculateCartTotal([{ "price": 5,  "quantity": -4 }]))
    })
})

describe("validate price", () => {
    it("return Error if price is not a number", () => {
        assert.throws(() => validatePrice("30"),/the price is not a number/)
    })
    it("return Error if price is negative",() => {
        assert.throws(() => validatePrice(-5),/the price is negative/)
    })
    it("return free product if price is zero",() => {
        assert.strictEqual(validatePrice(0),"free product")
    })
    it("return true if price is positive", ()=>{
        assert.strictEqual(validatePrice(15),true)
    })
})

describe("format price", () => {
    it("return 10.00 if the amount correct", () => {
        assert.strictEqual(formatPrice(10),"₪10.00")
    })
    it("return false if the amount is negative", () => {
        assert.strictEqual(formatPrice(-5),0)
    })
})