let createError = require('http-errors');
let express = require('express');
const mongoose = require('mongoose')
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser = require('body-parser');
const cors = require('cors')

let indexRouter = require('./routes/index');
let apiRouter = require('./routes/api');

const config = require('./config')

let app = express();


carros2 = [
  {
    id: "1",
    tipo_vehiculo: "PickUp",
    marca_vehiculo: "Toyota",
    modelo_vehiculo: "Hilux",
    año_vehiculo: "1999",
    precio_vehiculo: "30000"
  },
  {
    id: "2",
    tipo_vehiculo: "Camion",
    marca_vehiculo: "White Star",
    modelo_vehiculo: "Frontliner",
    año_vehiculo: "1980",
    precio_vehiculo: "40000"
  },
  {
    id: "3",
    tipo_vehiculo: "Microbus",
    marca_vehiculo: "Mitshubishi",
    modelo_vehiculo: "L1000",
    año_vehiculo: "2003",
    precio_vehiculo: "60000"
  },
    {
    id: "4",
    tipo_vehiculo: "SUV",
    marca_vehiculo: "marca_vehiculoiption",
    modelo_vehiculo: "PickUp",
    año_vehiculo: "PickUp",
    precio_vehiculo: "PickUp"
  },
    {
    id: "5",
    tipo_vehiculo: "Sedan",
    marca_vehiculo: "VW",
    modelo_vehiculo: "Jetta",
    año_vehiculo: "2010",
    precio_vehiculo: "60000"
  },
];


// MongoDB (mongoose)
var mongodbUri = 'mongodb://@ds039007.mlab.com:39007/proyectos_web_url';
mongoose.connect(mongodbUri,{
  useNewUrlParser: true,
  auth:{
    user: 'root',
    password: 'decimeanibal1'
  }
})
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', () =>{
  console.log('Conectado a la base de datos')
});

//mongoose.connect(config.databaseUrl, { useNewUrlParser: true })
//let db = mongoose.connection
//console.log(mongoose.connection)
//db.on('error', console.error.bind(console, 'connection error:'))

//db.collection('carros').insertMany(carros2);

conn.collection('carros').insertMany(carros2);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Enable CORS
app.use(cors())

app.use('/', indexRouter);
app.use('/api/v1', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console-log("error app principal");
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  error = {
    "message": err.message,
    "status": err.status || 500
  };
  res.send(error)
});

module.exports = app;

