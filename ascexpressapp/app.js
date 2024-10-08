var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var authorsRouter = require('./routes/authors');
var todosRouter = require('./routes/todoapi');
var carsRouter = require('./routes/car_rental_registration');
var booksRouter = require('./routes/books');
var categoryRouter = require('./routes/category');
const filesRouter=require("./routes/filesMulter");
const mongoose = require("mongoose");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/authors', authorsRouter);
app.use('/todos', todosRouter);
app.use('/cars', carsRouter);
app.use('/books', booksRouter);
app.use('/category', categoryRouter);
app.use("/file",filesRouter);

let mongoConnUrl = "mongodb://localhost/ascendion";
mongoose.connect(mongoConnUrl);
let db = mongoose.connection;
db.on("error",function(){
  console.log("Error came in connecting");
});
db.on("connected",function(){
  console.log("connected to mongoose Database named ascendion");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
