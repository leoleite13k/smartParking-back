const mongoose = require('mongoose')

const ParkingSchema = mongoose.Schema({
  pos: {
    type: String,
    require: true
  },
  disp: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('parking', ParkingSchema, 'parking')
