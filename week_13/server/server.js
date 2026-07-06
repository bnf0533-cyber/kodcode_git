// import http from "http"
// const server = http.createServer((req , res) => {
//     console.log(req.url);

//     res.writeHead(200,{"content-type" : 'application/json'})
//     res.end("hello world")
// })
// server.listen(3000 , () => {
//     console.log("server running on port 3000"); 
// }) 


// const http = require("http")

// function getUsers(req , res) {
//     res.end(JSON.stringify({name : "moshe" , id : 1}))
// }

// const server = http.createServer((req , res) => {
// console.log();
// const queryStr = req.url.split("?")[1]
// if (queryStr) { 
//     const paramsStr = queryStr.split("&");
//     const params = paramsStr[0].split("=");
//     const user = [{userNmae : "momo" , id : 0} , {userName : "nisim" , id : 3}].find(u => u.userName === params[1])
// }




// if (req.url === "/users" && req.method === "GET") {
//     getUsers(req , res)
//     return;
// }
//         res.end("Server is running")
// });

// server.listen(3000, () => {
//     console.log("server running...");
// });

// console.log("end file");
// console.log(new URL("http:/localhost:3000").searchParams.get("name"));




// import http from "http";

// function getUsers(req, res) {
// res.end(JSON.stringify([{ name: "Moshe", id: 1 }]));
// }
// const users = [{ userName: "momo", id: 0 }, { userName: "nisim", id: 3 }];

// const server = http.createServer((req, res)=>{
// if(req.url.startsWith("/users")){
// const paths = req.url.split("/");
// const id = paths[2];
// const foundUser = users.find((u) => (u.id + "") === id);
// res.end(JSON.stringify(foundUser));
// return;
// }
// res.end(JSON.stringify("Hello"));
// });

// server.listen(3000, ()=>{
// console.log("server running...")
// });

import http from "http";

function getUsers(req, res) {
    res.end(JSON.stringify([{ name: "Moshe", id: 1 }]));
}
const users = [{ userName: "momo", id: 0 }, { userName: "nisim", id: 3 }];
const server = http.createServer((req, res) => {
    let bodystr = ""
    req.on("data", (chunk) => {
        bodystr += chunk.toString()
    })
    req.on("end", () => {
        try {
            const data = JSON.parse(bodystr)
            console.log(data);
            
        }catch (e){
            console.error(e);
            
        }
        
    })
})




server.listen(3000, () => {
    console.log("server running...")
})