// 1

// function hello(name) {
//     console.log("hello " + name)
// }
// hello("Nehoray")

// 2

// function sum(a,b) {
//     return a + b
// }
// console.log(sum(2,6))

// 3

// function isEven(num) {
//     if (num % 2 == 0) {
//         return true
//     }else {
//         return false
//     }
// }
// console.log(isEven(4))

// 4

// function listi(words){
//     return words[words.length -1]
// }
// console.log(listi([1,2,3,4,5,6,7]))

// 5

// function appur(str) {
//     str = str.toUpperCase()
//     return str
// }
// console.log(appur("dnsocds "))

// 6

// let x = 5;
// function test() {
// let x = 10;
// console.log(x);
// }
// test();
// console.log(x);
// print : 10 and 5

// 7

// let y;
// function test() {
//     y = 10;
// }
// test()
// console.log(y);

// 8

// let x = 1;
// function a() {
// console.log(x);
// }
// function b() {
// let x = 2;
// a();
// }
// b();
// ידפיס 1 בגלל שאנחנו בכלל לא מחזירים כלום בפונקציה השניה

// 9

// {let y = 10}
// function test(){
//     console.log(y)
// }
// console.log(test())

// 10

// function add() {
// count = 0
// count++;
// console.log(count)
// }
// add()

// 11

// function sum1(nums) {
//     let sum2 = 0
//     for (i of nums) {
//         sum2 += i
//     }
//     return sum2
// }

// console.log(sum1([1,2,3,4,5,6,7,8,9]))

// 12

// function power(num) {
//     return num ** 2
// }
// function usePower(num) {
//     return power(num)
// }
// console.log(usePower(4))

// 13

// let x = 10;
// function test(x) {
//     return x * 2
// }
// console.log(test(5))
// because we are dont use in the global one

// 14

// function isEven(num) {
//     even = []
//     for (i of num) {
//         if (i % 2 === 0) {
//             even.push(i)
//         }
//     } return even
// }
// console.log(isEven([1,2,3,4,5,6,7,8,9]))

// 15


// let total = 0;
// function addToTotal(num) {
//     return total + num;
// }
// function reset() {
//     total = 0;
// }

// addToTotal(5);
// addToTotal(10);
// reset();

// console.log(total);


// =========2========

// 1

// const number = num => num * 3
// console.log(number(3))

// 2

// const string = str => str.length
// console.log(string("nehoray"))

// 3

// const number = function (num) {
//     if (num > 0) {
//         return ("positive")
//     }else if (num < 0) {
//         return("negative")
//     }else if (num === 0) {
//         return("zero")
//     }
// }
// console.log(number(3))

// 4

// const number = function (num1 , num2) {
//     if (num1 > num2) {
//         return num1
//     }else {
//         return num2
//     }
// }
// console.log(number(1,2))
// console.log(number(5,3))

// 5

// const numbers = arr => arr.length
// console.log(numbers([1,2,3,4,5,6,7,8,9]))

// 6

// let a = 3;

// function test() {
// a = 7;
// }

// test();
// console.log(a);
// יודפס 7 בגלל שהמשתנה גלובלי והפונקציה משנה אותו

// 7

// function test() {
// let a = 5;
// }
// test();
// console.log(a);
// יהיה שגיאה מכיוון שהמשתנה A לא מוכר בכלל בתוך הפונקציה הוא לא בתוך הסקופ שלה

// 8

// let x = 10
// function change() {
// let x = 20;
// }
// console.log(x);
// יודפס רק 10 כי אין שום קריאה לפונקציה שתשנה את את הערך של המשתנה

// 9

// let num = 9
// function first() {
// num++;
// }
// function second() {
// num = num + 2;
// }
// first();
// second();
// console.log(num);
// יודפס 12 מכיוון שכל פונקציה מעלה בתורה את מה שהוגדר בתוכה

// 10

// function print() {
//     let message = "Hi";
// console.log(message);
// }
// print()

// 11

// const littleNum = function (arr) {
//     let min = arr[0]
//     for (i of arr) {
//         if (i < min) {
//             min = i
//         }
//     } return min
// }
// console.log(littleNum([7,6,4,8,2,8,1,7,8,9,56]))    

// 12

// const division = function (num1,num2) {
//     if (num1 % num2 === 0) {
//         return true
//     }else {
//         return false
//     }
// }
// console.log(division(2,2))
// console.log(division(2,3))

// 13

// const str = arr => arr.join("")
// console.log(str(["vrno","ojno","vnfoovij"]))

// 14
// let x = 5;
// function test(x) {
// x = x + 10;
// return x;
// }
// let result = test(x);

//  כאן יודפס 5 מכיוון שהמשתנה הוגדר מחוץ לפונקציה
// console.log(x); 
// באן יודפס 15 מכיון שאנחנו מפעילים את הפונקציה שמעלה ב 10
// console.log(result);

// 15

// const num = function (n) {
//     for (let i = 0; i < n+1 ; i++) {
//         console.log(i)
//     } 
// }
// console.log(num(20))

// 16

// const number = (arr) => arr.filter((item , index) => arr.indexOf(item)=== index)
// console.log(number([1,2,3,4,5,1,2,3,4,5]))

// 17

// function add(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
        
//     }
//     return sum
// }

// add([1, 2]);

// add([3, 4]);

// let total = add([1,2])
// console.log(total);

// 18

// const  sumEvenNumbers =  function (arr) {
//     let sumEven = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             sumEven += i
//         }
//     }return sumEven
// }
// console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9]))

// 19

// let x = 1;

// function a() {

// let x = 2;

// function b() {

//     console.log(x);

// }

// b();

// }

// a();
// יודפס 2 כי רק שם יש הדפסה והשמה וזה דורס את מה שהיה כתוב לםני

// 20


// function getPrice(price) {
//     let discount = 0.1;

//   return price - price * discount;

// }

// console.log(getPrice(10))