const fs = require("fs")

// 1

// function writeFileAsPromise(filePath, content) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(filePath, content, "utf-8", (err) => {
//             if (err) {
//                 reject(e);
//                 return;
//             }
//             resolve()
//             console.log("file writhed successfully");
//         })
//     })
// }
// const wfp = writeFileAsPromise("./data/message.txt", "I love my baby")
// wfp.then(() => {
//     console.log("end exercise 1");
// })
//     .catch((e) => {
//         console.log(e);
//     })

// 2

// function readFileAsPromise(filePath) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, "utf-8", (err, data) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(data)
//         })
//     })
// }
// const rfp = readFileAsPromise("./data/message.txt")
// rfp.then((data) => {
//     console.log(data);
// })
//     .catch((err) => {
//         console.log(err);
//     })

// 3

// function readFileAndCount(filePath) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, "utf-8", (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(data.length)
//         })
//     })
// }
// const rfa = readFileAndCount("./data/message.txt")
// rfa.then((data) => {
//     console.log(data);
// })
//     .catch((e) => {
//         console.log(e);
//     })

// 4

function appendFileAsPromise(filePath, content) {
    return new Promise((resolve , reject) => {
        fs.writeFile(filePath , content,"utf-8",(err) => {
            if (err) {
                reject(err)
            }
            resolve()
            console.log("step 1 done")
        })
    })
}
const afp = appendFileAsPromise("./data/step1","Step 1 done")
afp.then((resolve) => {
    fs.writeFile("./data/step2","step 2 done","utf-8",(err) => { 
        if (err) {
            console.log(err);
            return;
        }
        console.log("step 2 done");
        return resolve
    })
})