const arr = [1,2,3,4,7,5,6,8,9]
const price = [567,123,12,56,8543,255]
const arrStr = ["hey","whatsapp","hello","appel"]
const users = [{ name: "Avi", age: 25, id : 1 }, { name: "Dana", age: 22 , id : 2 },{name: "Nehoray", age: 23 , id : 3}]

// console.log(arr.map(num => num * 2))

// console.log(arrs.map(word => word.toUpperCase()))

// console.log(arr.map(num => num * 0.17))

// console.log(arr.filter(num => num % 2 === 0))

// console.log(arrs.filter(word => word.length < 3))

// console.log(users.filter(userAge => userAge.age > 18))

// console.log(users.map(us => us.name))

// console.log(price.filter(pr => pr > 100).map(uppr => uppr + uppr * 0.10))

// console.log(arr.reduce((acc,curr) => {return acc + curr},0))

// console.log(arrs.reduce((acc,curr) => {return acc + curr}))

// console.log(users.reduce((acc,curr) => {return (acc + curr.age)},0) / users.length)

// console.log(arr.reduce((obj,value) => {
//     if (value % 2 === 0) {
//         obj.even += 1
//     }else {
//         obj.odd += 1
//     }
//     return obj
//     },{even: 0 , odd : 0}
// ))

// console.log(price.find(num => num > 50))

// console.log(users.find(u => u.id === 1))

// console.log(price.some(num => num < 0))

// console.log(price.every(num => num > 0))

// console.log(users.every(bigger => bigger.age > 18))

// console.log(arrs.includes('appel'))

// console.log(price.indexOf(8543))

// console.log(price.indexOf(255,2))

// arrs.forEach((item ,index) => console.log(index + " " + item))

// const newlist = []
// arr.forEach((a) => newlist.push(a * 2))
// console.log(newlist)

// console.log(arr.sort())

// console.log(arr.sort((a , b) => a - b).reverse())

// console.log(users.sort(((a ,b) => a.age - b.age)));
// console.log(users.sort(((a ,b) => b.age - a.age)));

// console.log(price.slice(2,5))

// price.splice(1,2)
// console.log(price)

// console.log(price.splice(1,2))

// price.splice(2,0,999)
// console.log(price)

// price.splice(3,1,23)
// console.log(price)

// const products = [
//     { name: "Laptop", price: 800, inStock: true,  category: "tech"    },
//     { name: "Phone",  price: 400, inStock: false, category: "tech"    },
//     { name: "Shirt",  price: 50,  inStock: true,  category: "fashion" }
// ];  
// console.log(users
//     .filter(user => user.age > 20)
//     .sort((a,b) => b.age - a.age)
//     .map(n => n.name)
//     .join(","))