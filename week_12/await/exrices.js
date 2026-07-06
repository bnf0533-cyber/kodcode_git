

// async function chang() {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         const data = await res.json()
//         console.log(data)
//     } catch (e) {
//         console.error(e);
//     }
// }
// chang()

// const { assert } = require("node:console");





// async function getDone() {
//     try {
//     const d = await "Done"
//     return console.log(d);
//     } catch (e) {
//         console.log(e);
//     }   
// }
// getDone()





// async function rebua(num) {
//     try {
//     const n = await (num ** 2)
//     return console.log(n);
//     } catch (e) {
//         console.log(e);
//     }
// }
// rebua(4)





// async function getUsers() {
//     try {
//         const users = await fetch("https://jsonplaceholder.typicode.com/users") 
//         const data = await users.json()
//         return data
//     } catch (e) {
//         console.log(e);
//     }
// }




// async function onUser() {
//     try {
//         const get = await getUsers()
//         return console.log(get)
//     } catch (e) {
//         console.error(e)
//     }
// }
// onUser()




// async function checkEven(num) {
//     return new Promise((resolve , reject) => {
//         if (num % 2 === 0) {
//             resolve("even");
//         }else {
//             reject("odd")
//         }
//     })
// }




// async function isEven(num) {
//     try {
//         const check = await checkEven(num)
//         return console.log(check);
//     }catch (e) {
//         console.log(e);
//     }
// }

// isEven(23)





// async function callApi() {
//     try {
//         const getOne = await fetch("https://jsonplaceholder.typicode.com/users")
//         const getTwo = await fetch("https://jsonplaceholder.typicode.com/users")
//         return console.log(getOne , getTwo)
//     } catch (e) {
//         console.error(e)
//     }
// }
// callApi()

