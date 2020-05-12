const express = require('express');

const server = express();

server.use('/', (req, res) => {
  res.json({server: 'up'});
});



module.exports = server;
