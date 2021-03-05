const express = require('express');
const cors = require('cors');
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
app.use(cors())
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
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Cant find ${req.originalUrl}`
    })
})

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
})

module.exports = app;