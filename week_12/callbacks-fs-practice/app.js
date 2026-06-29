const fs = require("fs");
const { endianness } = require("os");

// תרגיל 1

// fs.writeFile("./data/message.txt","hello from node fs!","utf-8",(e)=> {
//     if (e) return console.log(e);
//     console.log("file was created successfully");
// })

// תרגיל 2

// fs.readFile("./data/message.txt","utf-8",(e,data)=> {
//     if (e) return console.log(e);
//     console.log(data)

// })

// תרגיל 3

// console.log("Start");
// fs.readFile("./data/message.txt","utf-8",(e,data) => {
//     if (e) console.log(e);
//     console.log("data" , data);
// })
// console.log("end");

// 4

// fs.readFile("./data/not-exist.txt","utf-8",(e,data) => {
//     if (e) return console.log("Could not read file");
//     console.log("data",data)
// })

// 5

// function readTextFile(filePath, callback) {
//     fs.readFile(filePath, "utf-8", callback)
// }
// readTextFile('data/message.txt', function (err, content) {
//     if (err) return console.log('Error:', err);
//     console.log(content);
// }
// );

// 6

// fs.appendFile("./data/message.txt", "\nthis line added later", "utf-8", (e) => {
// if (e) return console.log(e);
// fs.readFile("./data/message.txt", "utf-8", (e, data) => {
// if (e) return console.log(e);
// console.log(data);
// })
// })

// 7

// fs.writeFile("./data/log.txt", "Log started", "utf-8", (e) => {
//     if (e) return console.log(e);
//     fs.appendFile("./data/log.txt", "\nFirst action completed \nSecond action completed", (e) => {
//         if (e) return console.log(e);
//         fs.readFile("./data/log.txt", "utf-8", (e, data) => {
//             if (e) return console.log(e);
//             console.log("data: ", data);
//         })
//     })
// })

// 8

// fs.mkdir("./data/users", { recursive: true },(e) => {
//     if (e) return console.log(e)
//     console.log("Users folder created")
// })

// 9

// fs.writeFile("./data/users/user1.txt","Name: David\nAge: 25","utf-8",(e) => {
//     if (e) return console.log(e);
// })

// 10

// fs.readdir("./data","utf-8",(e,data) => {
//     if (e) return console.log(e);
//     console.log(data);
// })

// 11

// fs.writeFile("./data/step1.txt", "Step 1 completed", "utf-8", (e) => {
//     if (e) return console.log(e);
//     fs.writeFile("./data/step2.txt", "Step 2 completed", "utf-8", (e) => {
//         if (e) return console.log(e);
//         fs.writeFile("./data/step3.txt", "Step 3 completed", "utf-8", (e) => {
//             if (e) return console.log(e);
//             console.log("All steps completed");
//         })
//     })
// })

// 12

// fs.readFile("./data/step1.txt", "utf-8", (e, data1) => {
//     if (e) return console.log(e);
//     fs.readFile("./data/step2.txt", "utf-8", (e, data2) => {
//         if (e) return console.log(e);
//         fs.readFile("./data/step3.txt", "utf-8", (e, data3) => {
//             if (e) return console.log(e);
//             console.log(data1,data2, data3);
//         })
//     })
// })

// 13

// fs.writeFile("./data/report-title.txt", "Daily Report","utf-8",(e) => {
//     if (e) return console.log(e);
//     fs.writeFile("./data/report-body.txt", "Everything is working","utf-8", (e) => {
//         if (e) return console.log(e);
//         fs.readFile("./data/report-title.txt", "utf-8", (e, dataTitle) => {
//             if (e) return console.log(e);
//             fs.readFile("./data/report-body.txt", "utf-8", (e, dataBody) => {
//                 if (e) return console.log(e);
//                 fs.writeFile("./data/final-report.txt",`${dataTitle}\n${dataBody}`,"utf-8", (e) => {
//                     if (e) return console.log(e);
//                     fs.readFile("./data/final-report.txt", "utf-8", (e, dataFinal) => {
//                         if (e) return console.log(e);
//                         console.log(dataFinal);
//                     })
//                 })
//             })
//         })
//     })
// })

// 14

// fs.writeFile("./data/original.txt", "Original file content", "utf-8", (e) => {
//     if (e) return console.log(e);
//     fs.readFile("./data/original.txt", "utf-8", (e, data) => {
//         if (e) return console.log(e);
//         fs.writeFile("./data/copy.txt", `${data}`, "utf-8", (e) => {
//             if (e) return console.log(e);
//             fs.readFile("./data/copy.txt", "utf-8", (e, dataCopy) => {
//                 if (e) return console.log(e);
//                 console.log(dataCopy);

//             })
//         })

//     })
// })