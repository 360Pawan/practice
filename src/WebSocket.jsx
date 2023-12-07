// WebSocketComponent.js
import React, { useState, useEffect } from "react";

const WebSocketComponent = () => {
  const [message, setMessage] = useState("");
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.addEventListener("open", () => {
      console.log("Connected to WebSocket");
    });

    socket.addEventListener("message", (event) => {
      const receivedMessage = event.data;
      setMessage(receivedMessage);
    });

    setWs(socket);

    // Clean up the WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (message) => {
    ws.send(message);
  };

  return (
    <div>
      <h1>WebSocket Example</h1>
      <div>
        <strong>Received Message:</strong> {message}
      </div>
      <div>
        <input
          type="text"
          placeholder="Type a message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => sendMessage(message)}>Send</button>
      </div>
    </div>
  );
};

export default WebSocketComponent;
