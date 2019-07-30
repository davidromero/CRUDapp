// src / models / tweet.js
'use strict'

const mongoose = require('mongoose')

// Tweet Collection
let carrosSchema = mongoose.Schema({
  id: String,
  tipo_vehiculo: String,
  marca_vehiculo: String,
  modelo_vehiculo: String,
  año_vehiculo: String,
  precio_vehiculo: String
})

module.exports = mongoose.model('carros', carrosSchema)