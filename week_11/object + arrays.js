const user = { name: "Alice", age: 25, role: "admin" };
const grades = { math: 80, english: 90, science: 70 };
const defaultSettings = { theme: "light", lang: "en" };
const userSettings = { lang: "he" };
const item = { id: 101, title: "Phone" };
const entryArray = [["name", "Alice"], ["age", 25]];
const prices = { apple: 10, banana: 5, mango: 20 };
const mixedData = { name: "John", age: 30, salary: 5000, isActive: true };

const getKey = (obj) => {
    return Object.keys(obj)
}
console.log(getKey(user))

const getVal = (obj) => {
    return Object.values(obj)
}
console.log(getVal(user))

const getKeyVal = (obj) => {
    Object.entries(obj).forEach(([key, val]) => {
        console.log(key + " ; " + val)
    })
}

const getAverage = (obj) => {
    const val = Object.values(obj)
    let sum = 0
    for (let i of val) {
        sum += i
    } return sum / val.length
}

console.log(getAverage(grades));

const mergeObjects = (obj1, obj2) => {
    return Object.assign(obj1, obj2)
}
console.log(mergeObjects(defaultSettings, userSettings))

const mergeModern = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};
console.log(mergeModern(defaultSettings, userSettings));


const checkHasOwn = (obj, key) => {
    if (Object.hasOwn(obj, key)) {
        return true
    } else false
}
console.log(checkHasOwn(user, "name"))

const config = Object.freeze({
    URL: "viber"
})
console.log(config.URL)
// config.URL = "bxv"
// console.log(config.URL)



