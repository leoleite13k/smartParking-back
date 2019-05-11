const express = require('express')

const routes = express.Router()

const controllers = require('./app/controllers')

routes.get('/vagas', controllers.ParkingController.index)
routes.get('/vagas/:id', controllers.ParkingController.show)
routes.post('/vagas', controllers.ParkingController.store)
routes.put('/vagas/:id', controllers.ParkingController.update)
routes.delete('/vagas/:id', controllers.ParkingController.destroy)

module.exports = routes
