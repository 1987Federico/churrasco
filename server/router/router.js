const express = require('express');
const app = express();
//controllers
const sitiosInteres = require('../controllers/sitiosInteres');
const login = require('../controllers/login');
//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configuracion de rutas
app.use('/sitiosInteres',sitiosInteres);
app.use('/login',login);

module.exports = app;