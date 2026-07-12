import http from "http"
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

// import http from "http";

// function getUsers(req, res) {
//     res.end(JSON.stringify([{ name: "Moshe", id: 1 }]));
// }
// const users = [{ userName: "momo", id: 0 }, { userName: "nisim", id: 3 }];
// const server = http.createServer((req, res) => {
//     let bodystr = ""
//     req.on("data", (chunk) => {
//         bodystr += chunk.toString()
//     })
//     req.on("end", () => {
//         try {
//             const data = JSON.parse(bodystr)
//             console.log(data);

//         }catch (e){
//             console.error(e);

//         }

//     })
// })




// server.listen(3000, () => {
//     console.log("server running...")
// })


// const server = http.createServer((req , res) => {
// const searchParam = new URL(req.url, "http://localhost").searchParams;
// if (!searchParam.get("username") || !searchParam.get("age")) {
//     return res.end("Miss required param")
// }
// console.log(searchParam);
//     res.end("end")
// })
// server.listen(3000, () => {
//     console.log("server running");

// })


// const server = http.createServer((req, res) => {
//     if (req.url.startsWith("/users/") && req.method === "GET") {
//         const paths = req.url.split("/");
//         if (paths.length !== 3 ) return req.end("wrong url")
//         return res.end(JSON.stringify({
//             username : "momo",
//             id : paths[2]
//     }));


//     }
//     res.end("end")
// })
// server.listen(3000, () => {
//     console.log("server running");

// })









// function checkPathParm(req , pattern , method = "get") {
//     if (req.url.startsWith("/users/") && req.method === method) {
//         const paths = req.url.split("/");
//         if (paths.length !== 3 || isNaN(+paths[2])) return;
//     }
// }

// server.on("request", (req, res) => {
//     if (!req.url.startsWith("/users") || req.method.toLowerCase() !== "get") {
//         return res.end("something wrong")
//     } else {
//         const searchParam = new URL(req.url, "http://localhost").searchParams
//         if (searchParam.get("username")) {
//             return res.end(JSON.stringify(searchParam.get("username")) + " you are a beautiful man")
//         }
//     }
// })

// server.listen(3000, () => {
//     console.log("server running");

// })


// const server = http.createServer((req , res) => {
//     let body = ""
//     req.on("data" , (chunk) => {
//         body += chunk.toString()
//     })
//     req.on("end" , () => {
//         console.log("end get all chunks");
//         if (!req.headers["content-type"].includes("application/json")) return res.end("invalid data")
//         try {
//             const data = JSON.parse(body)
//             res.end(JSON.stringify(data))
//             console.log(data);
//     }catch (e) {
//         console.log(e);
//     }
//     })
//     req.on("error", (e) => {
//         res.end(e)
//     })
//     console.log("endeded");
    
// })
// server.listen(3000 , () => {
//     console.log("server running...");
    
// })



