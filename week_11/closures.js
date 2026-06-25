// function out() {
//     let counter = 0;
//     function inc() {
//         return ++counter
//     }
//     return inc;
// }
// const o = out()
// console.log(o())
// console.log(o())
// console.log(o())



// function createLogger() {
//     const sey = "hello"
//     function sayHello() {
//         return sey
//     }
//     return sayHello
// }
// const say = createLogger()
// console.log(say())
// console.log(say())
// console.log(say())


// function createGreeting(name) {
//     let printName = "hello" + " " + name
//     function returnName() {
//         return printName
//     }
//     return returnName
// }
// const printN = createGreeting("nehoray")
// const print1 = createGreeting("shlomo")

// console.log(printN())
// console.log(print1())


// function createCounter(init = 0) {
//     let counter = 0
//     function addToCounter() {
//         return ++counter
//     }
//     return addToCounter
// }
// const add = createCounter(0)
// console.log(add())
// console.log(add())
// console.log(add())

// function outer() {
//     let x = 10;
//     return function () {
//     console.log(x);
//     };
// } 
// const fn = outer();
// fn();

// function createMultiplier(x) {
//     let mull = x * 2
//     return function () {
//         console.log(mull)
//     }
// }
// const double = createMultiplier(50);
// double();

// function createAdder(num) {
//     return function add(addnum) {
//         console.log(num + addnum)
//     }
// }
// const add5 = createAdder(5);
// add5(3);

// function createSecret() {
//     let secret = 20
//     const objSecret = {
//         getSecret: function ee () {return secret},
//         setSecret: (num) => secret = num
//     }
//     return objSecret
// }
// const gs = createSecret()
// console.log(gs.getSecret())
// console.log(gs.setSecret(50))


// const a = a => a+1
// function once(fn) {
//     let hasRun = false
//     function iner(a) {
//         if (!hasRun) {
//             hasRun = true
//             return fn(a)
//         }else return "early run"
        
//     }
//     return iner
// }
// const runOnce = once(a)
// console.log(runOnce(65))
// console.log(runOnce(65))


