import http from "http"

const users = [
    { "userName": "Idan_Cohen", "id": 1 },
    { "userName": "Noa_Levi", "id": 2 },
    { "userName": "Amit_Avraham", "id": 3 },
    { "userName": "Maya_Barak", "id": 4 },
    { "userName": "Yossi_Mizrahi", "id": 5 },
    { "userName": "Michal_Saban", "id": 6 },
    { "userName": "Tomer_Asulin", "id": 7 },
    { "userName": "Adi_Peretz", "id": 8 },
    { "userName": "Daniel_Kaufman", "id": 9 },
    { "userName": "Roni_Stern", "id": 10 }
]

const server = http.createServer((req, res) => {
    const searchParam = new URL(req.url, "http://localhost").searchParams;
    if (req.url === "/users" && req.method.toLowerCase() === "get") {
        return res.end(JSON.stringify(users))
    } else if (req.url.startsWith("/users?") && req.method.toLowerCase() === "get") {
        const userName = searchParam.get("userName")
        if (req.url.includes(userName)) {
            const user = users.find(u => u.userName === userName)
            if (!user) {
                return res.end("user not found.")
            }
            return res.end(JSON.stringify(user))
        }
    } else if (req.url.startsWith("/users/") && req.method.toLowerCase() === "get") {
        const params = req.url.split("/")
        if (params.length !== 3) return res.end("invalid url (id)")
        const id = params[2]
        const userById = users.find((u) => u.id === Number(id))
        return res.end(JSON.stringify(userById))

    } else if (req.url === "/users" && req.method.toLowerCase() === "post") {
        let body = ""
        req.on("data", (chunk) => {
            body += chunk
        })        
        req.on("end", () => {
            if (!req.headers["content-type"].includes("application/json")) return res.end("invalid url")
            try {
                const data = JSON.parse(body)
                users.push(data)
                return res.end(JSON.stringify(users))
            } catch (e) {
                res.end(e)
            }
        })
        req.on("error" , e => {
            res.end(e)
        })
    }
    else {
        res.end("invalid url")
    }
})

server.listen(3000, () => {
    console.log("server is running...");
})