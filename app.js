const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const app = express();
const port = 3000;
const session = require('express-session');
const models = require('./models');
const sequelize = require('sequelize');
const accountRouter = require('./routes/account');
const pgp = require('pg-promise')();