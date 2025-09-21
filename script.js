const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io'); // empfehlenswerte moderne Syntax

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 10000; // Render setzt PORT in der Umgebung

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'website/public')));

// Optional: explizite Route für '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website/public', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});