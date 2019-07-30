var mongoose = require("mongoose");
var car = require("../models/car");

var CarController = {};

not_found_resp = {
  status: 404,
  message: "Not found"
};

// Show list of cars
CarController.list = function(req, res, resp) {
  car.find({}).exec(function (err, cars) {
    if (err) {
      console.log("Error:", err);
      console.log('carros no encontrado');
      res.status(404).send(not_found_resp);
    }
    else {
      resp.payload = cars;
      console.log('mostrando todos los carros');
      resp.status = 200;
      res.send(resp);
    }
  });
};

// Show car by id
CarController.show = function(req, res, resp) {
  car.findOne({id: req.params.id}).exec(function (err, car) {
    if (err) {
      console.log("Error:", err);
      console.log('carro no encontrado');
      res.status(404).send(not_found_resp);
    }
    else {
      if (car !== null) {
        resp.payload = car;
        console.log('mostrando el carro seleccionado');
        resp.status = 200;
        res.status(200).send(resp)
      }
      else
      {
        console.log('carro no encontrado');
        res.status(404).send(not_found_resp);
      }
    }
  });
};


// // Create new car
// CarController.create = function(req, res) {
//   //res.render("../views/cars/create");
// };

// // Save new car
// CarController.save = function(req, res) {
//   var car = new car(req.body);

//   car.save(function(err) {
//     if(err) {
//       console.log(err);
//       //res.render("../views/cars/create");
//     } else {
//       console.log("Successfully created an car.");
//       //res.redirect("/cars/show/"+car._id);
//     }
//   });
// };

// // Edit an car
// CarController.edit = function(req, res) {
//   car.findOne({id: req.params.id}).exec(function (err, car) {
//     if (err) {
//       console.log("Error:", err);
//     }
//     else {

//       //res.render("../views/cars/edit", {car: car});
//     }
//   });
// };

// Update an car
CarController.update = function(req, res, resp) {
  car.replaceOne({id: req.params.id}, {$set: req.body}, function (err, car) {
  //car.findByIdAndUpdate(req.params.id, { $set: { id: req.body.id, tipo_vehiculo: req.body.tipo_vehiculo, marca_vehiculo: req.body.marca_vehiculo, modelo_vehiculo: req.body.modelo_vehiculo, año_vehiculo: req.body.año_vehiculo, precio_vehiculo: req.body.precio_vehiculo }}, { new: true }, function (err, employee) {
    if (err) 
    {
      console.log("Error:", err);
      res.status(404).send(not_found_resp);
    }
    else
    {
      console.log('carro actualizado');
      resp.status = 204;
      resp.payload = req.body;
      res.status(204).send(resp);
    }
  });
};


// Delete an car
CarController.delete = function(req, res, resp) {
  car.remove({id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
      res.status(404).send(not_found_resp);
    }
    else {
      console.log("carro borrado!");
      resp.status = 204;
      res.status(204).send(resp);
    }
  });
};


//Create a car
CarController.create = function (req, res, resp) {
  var n_car = new car(req.body);
  n_car.save(function (err) {
    if (err) {
      res.status(400).send(not_found_resp);
    }
    else {
      resp.status = 200;
      resp.payload = car;
      res.status(200).send(resp)
    }
  })
};


module.exports = CarController;
