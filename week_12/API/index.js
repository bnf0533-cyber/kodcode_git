// 1

// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method: "GET"
// })
// .then((res) => {
//     return res.json();
// })
// .then (res => {
//     console.log(res.title);
// })
// .catch(console.log);

// 2

// fetch("https://jsonplaceholder.typicode.com/notfound")
//     .then((res) => {

//         return res.json() && res.status
//     })
//     .then(res => {
//         console.log(res);

//         if (!res.ok) {
//             console.log("ok is false");
//         }
//         console.log(res => { res.ok })
//     })

// 3

// fetch("https://jsonplaceholder.typicode.com/posts", )
//     .then((res) => res.json())
//     .then(data => {
//         data.forEach(res => {
//             console.log(res.title);
//         });
//     })

// 4


// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {"content-type": "application/json"},
//     body: JSON.stringify({
//         body: "inside in the post",
//         title: "new title",
//         userid: "1",
//     })
// })
//     .then(res => res.json())
//     .then(saved => console.log(saved)
//     )


// 6

fetch("https://jsonplaceholder.typicode.com/posts/")
.then((res) => {
    res.json()
    return res.map(() => res.userid)
})
.then(res => {res.name
})