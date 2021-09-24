 
const express = require('express');
const logger = require('morgan');
require('dotenv').config({ path: `${__dirname}/../.env` });


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
require('./db/db');

const app = express();

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;