export function calculateDiscount(price, percent) {
    if (typeof price !== "number" || typeof percent !== "number") {
        throw new Error("the parameter must be a number");
    }
    if (price < 0 || percent < 0) return false;
    const discount = (price * percent) / 100;
    const priceAfterDiscount = price - discount;
    return priceAfterDiscount;
}

export function applyTax(price, texRate) {
    if (typeof price !== "number" || typeof texRate !== "number") {
        throw new Error("the parameter must be a number");
    }
    if (price < 0 || texRate < 0) return false;
    const newPriceAfterTax = texRate * 100 + price;
    return newPriceAfterTax;
}

export function calculateCartTotal(item) {
    if (!item || (item.length === 0 || item < 0)) return 0;
    let sum = 0;
    for (let element of item) {
        console.log(element);
        
        if (element.price < 0 || element.quantity < 0)
            throw new Error({
                Message: "the price or quantity cannot be negative",
            });
        sum += (element["price"] * element["quantity"]);
    }
    return sum;
}

export function validatePrice(price) {
    if (typeof price !== 'number') {
        throw new Error("the price is not a number")
    }if (price < 0) {
        throw new Error("the price is negative")
    }if (price === 0) {
        return "free product"
    }if (price > 0) {
        return true
    }
}

export function formatPrice(amount) {
    if (!amount || amount < 0) return 0
    const formattedNumber = amount.toFixed(2);
    return `₪${formattedNumber}`;
}
