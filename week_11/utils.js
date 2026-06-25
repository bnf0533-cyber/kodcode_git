const add = (a , b) => a + b;
const mul = (a , b) => a * b;

module.exports = {
    add : add,
    mul : mul
}

export {add,mul}

import rl from "readline-sync"
const name = rl.question("enter your name")

console.log(name)