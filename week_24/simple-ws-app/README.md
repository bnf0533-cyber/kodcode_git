# WebSocket Chat Application

A simple real-time chat application using WebSockets.

## Project Structure

```
ws-app/
├── front/          # Frontend files
│   ├── index.html  # HTML file
│   └── app.js      # JavaScript with WebSocket listeners
└── server/         # Server files
    ├── server.js   # WebSocket server
    └── package.json
```

## Setup

### Server Setup

1. Navigate to the server folder:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

The server will run on `ws://localhost:8080`

### Frontend Setup

1. Navigate to the client folder:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the client:
```bash
npm run dev
```

The client will run on `http://localhost:5173`

## Features

- Real-time messaging via WebSocket
- Broadcasts messages to all connected users
- Connection status indicator
- Auto-reconnect on disconnect
- Timestamped messages

