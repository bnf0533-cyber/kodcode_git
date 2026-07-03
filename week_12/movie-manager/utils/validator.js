export function checkTitle(title) {
    if (typeof title !== "string") {
        return false
    }
    const checkStr = title.trim()
    if (checkStr === "") {
        return false
    }
    return true
}

export function checkYear(year) {
    const currentYear = new Date().getFullYear()
    if (typeof year !== "number" || isNaN(year)) {
        return false
    }
    if (year < 1900 || year > currentYear) {
        return false
    }
    return true
}

export function checkRating(rating) {
    if (typeof rating !== "number" || isNaN(rating)) {
        return false
    }
    if (rating < 0 || rating > 10) {
        return false
    }
    return true
}
