var express = require('express');
var purchaseRouter = require('./routes/purchase');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const port = 3001;

app.use('/storeData/', purchaseRouter);
//app.use('/', purchaseRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
