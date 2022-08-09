const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();
const dataRouter = require('./routes'); // routes for rajaongkir api

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/', dataRouter); // setup base path & get data api from routes

module.exports.handler = serverless(app);
