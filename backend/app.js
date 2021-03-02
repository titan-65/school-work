const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const schoolWorkRouter = require('./routes/school')

const app = express();

/**  
    Middleware
*/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/**
    Routes
 */
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', schoolWorkRouter);

module.exports = app;