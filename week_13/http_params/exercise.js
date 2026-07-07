import http from "http"

// 1


// function extractId(url) {
//     // const server = http.createServer()
//     const parts = url.split("/");
//     if (parts.length < 3) {
//         return NaN
//     }
//     return parts[2]
// }
// const id1 = extractId("/users/42")
// const id2 = extractId("/users/1")
// const id3 = extractId("/users")
// console.log(id1, "\n", id2, "\n", id3);


// 2


// function parseQuery(url) {

//     // /users?role=admin&page=2

//     const qs = url.split("?")[1] || "";
//     if (qs) {
//     const mn = qs.split("&")
//     const  m = mn.map(u => u.split("="))
//     console.log(Object.fromEntries(m));
//     }else {
//         return {}
//     }
// }
// console.log(parseQuery("/users?role=admin&page=2"));
// console.log(parseQuery("/users"))



// 3



// function getQueryParams(rawUrl) {

//     const parsed = new URL(rawUrl, "http://localhost");

//     const qs = parsed.searchParams
//     return {
//         page: qs.get("page") || "1",
//         limit: qs.get("limit") || "10",
//         sort: qs.get("sort") || "1"
//     };
// }
// console.log(getQueryParams("/users?page=3&sort=name"))



// 4




// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
// ];

// function getParam(url, pattern) {

//     // /users/:id vs /users/42

//     const pp = pattern.split("/");
//     const up = url.split("/");
//     const key = pp.find(s => s.startsWith(":"))?.slice(1);
//     const idx = pp.findIndex(s => s.startsWith(":"));
//     return { [key]: up[idx] }
// }
// // handler:
// const url = "/users/1"
// const { id } = getParam(url, "/users/:id");
// const user = users.find(u => u.id === +id);
// if (user) {
//     console.log(`${JSON.stringify(user)}, status code: 200`);
// }else {
//     console.log(`400 ${JSON.stringify("error")}`);
// }



// 5


function handler(req, res) {

    const parsed = new URL(req.url, "http://localhost");
    const qs = parsed.searchParams;
    const role = qs.get("role");
    const page = +(qs.get("page") || 1);
    const limit = +(qs.get("limit") || 10);
    let result = users;
    if (role) {
        role = role.filter((r) => { r.role === role })
    }
    const start = 'hi'
    console.log(start);
    start;

    sendJSON(res, 200, result);

}

