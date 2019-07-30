let express = require('express');
let router = express.Router();
var car = require("../controllers/CarController.js");

carros = [
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

not_found_resp = {
  status: 404,
  message: "Not found"
};

error_resp = {
  status: 400,
  message: "Error in body"
};

resp = {
  status: 200,
  payload: null
};

router.get('/carros', function(req, res, next) {
  //Read all carros
  car.list(req, res, resp)
});

router.get('/carros/:id', function(req, res, next) {
  //Read one carro
  car.show(req, res, resp);
});

// router.post('/carros', function(req, res){
//   //Insert one carro
//   let carro = req.body;
//   if (carro.hasOwnProperty("id") &&
//       carro.hasOwnProperty("tipo_vehiculo") &&
//       carro.hasOwnProperty("marca_vehiculo") &&
//       carro.hasOwnProperty("modelo_vehiculo")&&
//       carro.hasOwnProperty("año_vehiculo")&&
//       carro.hasOwnProperty("precio_vehiculo")){
//     let found = false;
//     for(let i = 0; i < carros.length; i++) {
//       if (carros[i].id === carro.id) {
//         found = true;
//         break;
//       }
//     }
//     if (!found){
//       carros.push(carro);
//       resp.status = 201;
//       resp.payload = carro;
//       res.status(201).send(resp);
//     }
//     else{
//       resp.status = 200;
//       resp.payload = carro;
//       res.status(200).send(resp)
//     }
//   }
//   else{
//     res.status(400).send(error_resp);
//   }
// });

router.delete('/carros/:id', function (req, res){
  //Delete one carro
  car.delete(req, res, resp);
});

router.put('/carros/:id', function(req, res){
  car.update(req, res, resp)
});

router.post('/carros', function(req, res){
  car.create(req, res, resp);
});


module.exports = router;
