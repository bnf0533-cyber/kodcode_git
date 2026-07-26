export function add(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("orgs must be a number")
    }
    return a + b
}

export function isEven(n) {
    if (n % 2 == 0) {
        return true
    }
    return false
}