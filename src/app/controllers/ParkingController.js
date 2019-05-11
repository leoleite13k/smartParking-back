const Parking = require('../model/Parking')

class ParkingController {
  async index (req, res) {
    const vagas = await Parking.find()

    return res.json(vagas)
  }

  async show (req, res) {
    const vagas = await Parking.findById(req.params.id)

    return res.json(vagas)
  }

  async store (req, res) {
    const vagas = await Parking.create(req.body)

    return res.json(vagas)
  }

  async update (req, res) {
    const vagas = await Parking.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(vagas)
  }

  async destroy (req, res) {
    await Parking.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new ParkingController()
