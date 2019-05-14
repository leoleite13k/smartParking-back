const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const controllers = require('./app/controllers')
const validators = require('./app/validators')

routes.get('/vagas', handle(controllers.ParkingController.index))
routes.get('/vagas/:id', handle(controllers.ParkingController.show))
routes.post(
  '/vagas',
  validate([validators.ParkingCreate]),
  handle(controllers.ParkingController.store)
)
routes.put(
  '/vagas/:id',
  validate(validators.ParkingUpdate),
  handle(controllers.ParkingController.update)
)
routes.delete('/vagas/:id', handle(controllers.ParkingController.destroy))

module.exports = routes
