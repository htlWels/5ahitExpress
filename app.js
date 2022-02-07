var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var app = express();
const mongoose = require('mongoose')
const MongoStore=require('connect-mongo')
require('dotenv').config()

const initDB = require('./config/initDB')
require('./config/passport')

/* Mongo Setup */

const MONGO_URL= process.env.MONGO_URL




const options = {
  autoIndex: true, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
  useNewUrlParser:true
};

function cleanup() {
  console.log("Sigterm signal received ...")
  mongoose.connection.close(()=>{
    process.exit(0)
  })
}


mongoose.connect(MONGO_URL, options).then(
  () => { 
    console.log("Mongoose opened connection to MongoServer")
    //initDB.writeDB()

    mongoose.connection.on('disconnected',()=>{
      console.log('Mongoose connection disconnected ....')
    })

    process.on('SIGINT',cleanup)
    process.on('SIGTERM',cleanup)
    process.on('SIGHUB',cleanup)

   },
  err => { 
    console.log("Mongoose could not open MongoServer due to error: " + err)
    process.exit(1)

   }
);


/* Session Management */

let sessionStore=new MongoStore({
  mongoUrl:process.env.MONGO_URL,
  dbName:'authorization',
  collectionName:'sessions',
  ttl: 24*60*60,
  autoRemove:'native',
  mongoOptions:{
    useUnifiedTopology:true
  }
}, (err => {
  if (err) {
    console.log("Error in creating mongo session storage: " + err)
  }
}))


app.use(session({
  secret: 'heuteIstEinGuterMontag',
  resave: false,
  saveUninitialized: true,
  name:"htlWels.ahit5",
  store:sessionStore,
  cookie: { secure: false }
}))


/* Routing */

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var htlRouter = require('./routes/htl/index')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/htl',htlRouter)

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
