import { use, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

import "./App.css";

function App() {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [isConnection, setIsConnection] = useState(false);
    const [currentRoom, setCurrentRoom] = useState<string>("roomA");
    const ws = useRef<Socket | null>(null);
    useEffect(() => {
        ws.current = io("ws://localhost:3030");

        ws.current.on("connect", () => {
            console.log("connected");
            setIsConnection(true);
            ws.current?.emit("room:join","roomA")
        });
        ws.current.on("room:msg", (msg) => {
            setMessages((prev) => [...prev, msg]);
        });
        ws.current.on("disconnect", () => {
            console.log("disconnected");
            setIsConnection(false);
        });
    }, []);

    const handleJoinRoom = (roomId: string) => {
        setCurrentRoom(roomId);
        setMessages([]);
        ws.current?.emit("room:join", roomId);
    };

    const handleSend = () => {
        if (input.trim() && ws.current?.connected) {
            ws.current.emit("room:msg", { room: currentRoom, msg: input });
            setInput("");
        }
    };
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <h3>
                    Status: {isConnection ? "🟢 Connected" : "🔴 Disconnected"}
                </h3>
                <div style={{ marginBottom: "15px" }}>
                    <strong>חדר נוכחי: {currentRoom} </strong>
                    <button
                        onClick={() => handleJoinRoom("roomA")}
                        style={{ margin: "0 5px" }}
                    >
                        room A
                    </button>
                    <button
                        onClick={() => handleJoinRoom("roomB")}
                        style={{ margin: "0 5px" }}
                    >
                        room B
                    </button>
                </div>
                <div
                    style={{
                        border: "1px solid #ccc",
                        height: "200px",
                        overflowY: "scroll",
                        marginBottom: "10px",
                    }}
                >
                    {messages.map((msg, index) => (
                        <div key={index}>{msg}</div>
                    ))}
                </div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default App;
