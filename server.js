const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('New connection.');
  socket.on('test', (data) => {
    console.log(data);
    socket.emit('testemit', {testemit: 'testemit'})
  });
});

server.listen(3001,
  () => console.log('Express/Node server started on port 3001')
);
