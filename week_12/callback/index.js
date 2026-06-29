// console.log("start");
// setTimeout(() => {
//     console.log("set time out");
// },3000 );
// setTimeout(() => {
    
// },0 );
// console.log("end");

const fs = require("fs")
// const f = fs.readFile("./momo.txt","utf-8",(e,data) => {
//     if (e) return console.log(e);
//     ;
//     console.log("End red file",data);
//     console.log(e);
    
    
// })
// fs.mkdirSync("./data/momo.txt",{recursive : true})
// fs.writeFileSync("./momo.txt","Nehoray is a sand of king","utf-8")
// console.log("End");


fs.writeFile("./momo.txt","nehoray","utf-8", (e) => {
    if (e) return console.log(e);
    console.log("file created successfully");
    readFile("./momo.txt","utf-8",(e,data) => {
        if (e) return console.log(e);
        console.log("data",data);
    });
});
function readFile(path,encoding,cb) {
    fs.readFile("./momo.txt","utf-8",(e,data) => {
        if (e) return cb(e);
        cb(null,data);
    })
}


console.log("End file")

