export function isEven(n) {
    if (n % 2 == 0) {
        return true
    }
    return false
}

export function max(a, b) {
    return Math.max(a,b)
}

export function average(numbers) {
    if (numbers.length === 0) {
        throw new Error("the list is empty and cannot div by zero")
    }
    const total = numbers.reduce((acc , curr) => {
        return acc += curr
        
    })
    return total / numbers.length
}

export function toTitleCase(str) {
    if (!str) return ""
    const splitStr = str.split(" ")
    let res = ""
    for (let first of splitStr) {
        const toUpperFirstLetter = first[0].toUpperCase() + first.slice(1)+ " "
        res += toUpperFirstLetter
    }
    return res.trim()
}

export function filterEven(numbers) {
    let even = []
    for (let num of numbers) {
        if (num % 2 === 0 ) {
            even.push(num)
        }
    }
    if (even.length === 0) {
        return []
    }
    return even
}

