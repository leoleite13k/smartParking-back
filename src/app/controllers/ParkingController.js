const Parking = require('../model/Parking')

class ParkingController {
  async index (req, res) {
    const filters = {}

    if (req.query.pos) {
      filters.pos = req.query.pos
    }

    if (req.query.disp) {
      filters.disp = req.query.disp
    }

    const vagas = await Parking.find(filters).sort({ createdAt: 1 })

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
