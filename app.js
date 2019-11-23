var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*
* lignes ajoutées :
* */
var mongoose = require('mongoose');
var mongo=mongoose.connection;
const url = "mongodb://localhost:27017/hackathon";
mongoose.connect(url ,{useNewUrlParser:true});

mongo.on('connected',()=>{
  console.log('Init');
});

mongo.on('open',()=>{
  console.log('Open !');
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var demandeRouter =require('./routes/demande');
var evenementRouter =require('./routes/evenement');
var reclamationRouter =require('./routes/reclamation');
var voucherRouter =require('./routes/voucher');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/demande', demandeRouter);
app.use('/reclamation', reclamationRouter);
app.use('/voucher', voucherRouter);
app.use('/evenement', evenementRouter);





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
