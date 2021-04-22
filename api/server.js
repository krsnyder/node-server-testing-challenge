const Express = require('express');

const Teams = require('./teams/teams-model');

const server = Express();

server.use(Express.json());

server.post('/teams', (req, res) => {
  res.end();
});

server.delete('/teams', (req, res) => {
  res.end();
});

// eslint-disable-next-line no-unused-vars
server.use('*', (err, req, res, next) => {
  res.status(500).json({
    customMessage: 'Shit is broken',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
