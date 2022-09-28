const express = require('express');
const { estrategiasAutenticacao } = require('./src/usuarios');
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);

module.exports = app;
