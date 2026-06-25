// 1

// for (let i = 1; i < 11 ; ++i){
//   console.log(i)
// }

// 2

// for (let i = 10; i > 0 ; --i) {
//   console.log(i)
// }

// 3

// let sum = 0
// const numbers = [1,2,3,4,5]
// for (let i = 0; i < numbers.length; i++){
  // sum += numbers[i]
// }
// console.log(sum)

// 4

// const names = ["Ron","michal","yosi","dana"]
// for (let name = "0";name < names.length; name++) {
//   console.log(names[name])
// }

// 5

// const numbers = [2, 5, 8, 11, 14, 17, 20];
// for (let i = 0; i < numbers.length ; i++) {
//   if (i % 2 == 0) {
//     console.log(numbers[i]);
//   }
// }

// 6

// const numbers = [3, 99, 12, 45, 78];
// let big = 0
// for (let i = 0; i < numbers.length; i++) {
//   if (big < numbers[i]) {
//     big = numbers[i]
//   }
// }
// console.log(big)

// 7

// const word = "javascript";
// for (let i = 0; i < word.length; i++) {
//   console.log(word[i])
// }

// 8

// const numbers = [1,2,3,4]
// for (i = 0;i < numbers.length; i++) {
//   console.log(numbers[i] * 2)
// }

// 9

// let i = 0
// while(i < 10) {
//   i++
//   console.log(i)
// }

// 10

// let input = ""
// while (input !== "stop") {
//   console.log("please keep to enter")
//   input = "stop"
// }

// 11

// let number = 0
// let sum = 0
// while (number !== 0) {
//   console.log("please enter a number")
//   sum += number
// }
// console.log(sum)

// 12

// const secret = 7
// let input = 8
// while (input !== secret) {
//   console.log("please enter your gus")
//   if (input === secret) {
//     console.log("weldon")
//     break
//   }
// }

// 13

// let x = 1;
// while (x < 20) {
//   console.log(x)
//   x++
// }

// 14

// let password = "";
// while (password !== "1234") { 
//   console.log("please enter a number")
//   password = "1234"
// }

// 15

// let count = 0;
// do {
//   count++
// } while (count < 10)
//   console.log(count)

// 16

// let choice;
// do {
//   choice !== "exit"
// } while (choice !== "exit")
//   console.log(("please enter your choice"))

// 17

// const numbers = [1, 3, 7, 9, 15, 2];
// for (let i = 0; i < numbers.length ; i++) {
//   if (numbers[i] > 10) {
//     console.log(numbers[i])
//     break
//   }
// }

// 18

// const numbers = [5, -1, 8, -3, 10];
// for (let i = 0 ; i < numbers.length; i++) {
//   if (numbers[i] > 0)
//     console.log(numbers[i])
//   continue
// }

// 19
// const ages = [12, 15, 18, 21, 25];
// for (let i = 0 ; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     console.log(ages[i], i)
//     break
//   }
// }

// 20
// const arr = [10, 20, 30, 40, 50];
// for (let i = 0 ; i < arr.length; i++) {
//   console.log(arr[i])
// }

// 21

// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0
// for(let i = 0 ; i < numbers.length ; i++) {
//   if (numbers[i] % 2 === 0){
//     sum += numbers[i]
//   }
// }
// console.log(sum)

// 22

// const target = 25;
// const numbers = [10, 15, 20, 25, 30];
// for (let i = 0 ; i < numbers.length ; i++) {
//   if (numbers[i] === target)
//     console.log(i + " " + numbers[i])
// }

// 23

// const word = "hello world";
// for (let i = 0; i < word.length; i++) { 
//   console.log(word[i].toUpperCase())
// }

// 24

// const numbers = [2, 4, 6, 8, 10, 12];
// for (let i = 0; i  < numbers.length; i++) {
//   if (numbers[i] > 8 && numbers[i] % 2 === 0) {
//     console.log(numbers[i])
//     break
//   }
// }

// 25

// const students = [
//   { name: "דנה", grade: 55 },
//   { name: "יוסי", grade: 90 },
//   { name: "מיכל", grade: 78 },
//   { name: "רון", grade: 45 }
// ];
// let theBest = []
// for (let student = 0 ; student < students.length ; student++) {
//   if (students[student]["grade"] === 100) {
//     console.log(students[student].name)
//     break
//   } else if (students[student]["grade"] > 60) {
//     console.log(students[student])
//   }
// }
