// server.js
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 3001 });

server.on("connection", (socket) => {
  console.log("Client connected");

  // Listen for messages from the client
  socket.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Broadcast the message to all connected clients
    server.clients.forEach((client) => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Listen for the socket to close
  socket.on("close", () => {
    console.log("Client disconnected");
  });
});
