const express = require('express');
const games = require('./games.js');

const server = express();

server.use(express.json());


module.exports = server;