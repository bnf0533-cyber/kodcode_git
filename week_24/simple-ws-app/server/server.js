import { Server } from 'socket.io';
import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"]
    }
})

io.on("connect", (client)=>{
    console.log("client connect:", client.id);
    client.on("msg", (msg)=>{
        console.log(msg);
        io.emit("getMsg", msg);
    }) 
    
    
    client.on("disconnect", ()=>{
        console.log("cliecnt disconncted", client.id)
    })
})


server.listen(8080, () => {
    console.log('server runing on http://localhost:8080 / ws://localhost:8080');
})