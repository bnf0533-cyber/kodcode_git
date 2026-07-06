const fs = require("fs")

// fs.readFile("./data/message.txt", "utf-8")
//     .then((val1) => {
//         fs.writeFile("./data/message2.txt", val1 + "\n this two contents", "utf-8")
//             .then(() => {
//                 return fs.writeFile("./data/,message3.txt", val1 + "\n this two contents" + "this three contents", "utf-8")
//                     .then(() => {
//                         console.log("Finish write 2 files ");
//                     })
//             })
//     }).catch(err => {
//         console.log(err);
//     })

// function readFile() {
//     return new Promise((res, rej) => {
//         fs.readFile("./data/message.txt", "utf-8", (err, data) => {
//             if (err) return rej(err)
//         })
//     })
// }
// readFile().then(console.log)
// .catch(console.log)

async function readFile() {
    try {
        const res = await fs.readFile("./data/data.json","utf-8")
        return JSON.parse(res || [])
        console.log(res);
        return res
    } catch(e) {
        console.log(e);
        return []
    }
}
const res = readFile()
console.log("end file");


async function writeData(data) {
    try {
        fs.writeFile("./data/data.json",JSON.stringify(data),"utf-8")
        return true;
    } catch (e) {
        console.log(e);
        
    }
}

async function createUser() {
    const name = "Nehoray"
    const id = 2
    const users  = await readFile()
    users.push({ user , id })
    try {
    const res = await writeData(users)
    console.log(res ? "success" : "failed to write");
    } catch (e) {
        console.error(e)
    }
}

async function writeUsers() {
    try {
        await createUser()
        await createUser()
        await createUser()
        await createUser()
    } catch (e) {
        console.error(e)
    }
    
}

writeUsers()