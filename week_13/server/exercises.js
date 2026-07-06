import http from 'http'
const PORT = 3000;
// 1
// const server = http.createServer((req , res) => {
//     res.end("hello from my server.")
// })
// server.listen(3000, () => {
//     console.log("server running on port 3000");
// })


// 2

// const server = http.createServer((req, res) => {
//     if (req.url === "/" && req.method === "GET") {
//         res.end("Home page");
//     }else if (req.url === "/about" && req.method === "GET") {
//         res.end("About page")
//     }else if (req.url === "/contact" && req.method === "POST") {
//         res.end("Contact Page")
//     }else {
//         res.statusCode = 404
//         res.end("Page not found")
//     }
// })
// server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))


// 3

// const server = http.createServer((req, res) => {
//     if (req.url === "/users" && req.method === "GET") {
//         res.end("users list")
//     } else if (req.url === "/users" && req.method === "POST") {
//         res.end("user created")
//     } else {
//         res.statusCode = 404
//         res.end("Method Not Allowed")
//     }
// })
// server.listen(3000 , () => console.log("server is running")
// )