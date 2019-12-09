const http = require('http');
const express = require('express');
const cors = require('cors');
const colyseus = require('colyseus');
const monitor = require('@colyseus/monitor');

const MyRoom = require('./MyRoom').MyRoom;
const port = process.env.PORT || 2567;
const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const gameServer = new colyseus.Server({ server: server });

//room handlers
gameServer.define('my_room', MyRoom);

//register colyseus monitor after room handlers
app.use('/colyseus', monitor(gameServer));

gameServer.listen(port);
console.log(`Listening on ws://localhost:${port}`);