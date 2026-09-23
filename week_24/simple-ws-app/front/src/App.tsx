import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const ws = useRef<Socket | null>(null); // Keeps the same WS instance across renders

  useEffect(() => {
    // 1. Initialize the WebSocket connection
    ws.current = io('ws://localhost:8080');
    ws.current.on("connect", () => {
      console.log("connected");
      setIsConnected(true);
    })
    ws.current.on("getMsg", (msg) => {
      setMessages(prev => [...prev, msg]);
    })
    ws.current.on("disconnect", () => {
      console.log("disconnect");
      setIsConnected(false);
    })
    // 5. Cleanup connection on component unmount
    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws.current?.connected) {
      ws.current.emit("msg", inputValue);
      setInputValue('');
    }
  };
  return (
    <div style={{ padding: '20px' }}>
      <h3>Status: {isConnected ? '🟢 Connected' : '🔴 Disconnected'}</h3>
      <div style={{ border: '1px solid #ccc', height: '200px', overflowY: 'scroll', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}