import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
    },
});

io.on("connect", (socket) => {
    socket.on("chat:send", (msg) => {
        io.emit("chat:receive", msg);
    });
    socket.on("room:join", (roomId) => {
        socket.join(roomId);
    });
    socket.on("room:msg", ({room, msg}) => {
        io.to(room).emit('room:msg',msg);
    });
});

server.listen(3030, () => {
    console.log(
        "server running on http://localhost:3030 / ws running on ws://localhost:5173"
    );
});
