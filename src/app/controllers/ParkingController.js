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
    const filters = {}
    var pos = []
    var posBanco = []
    var posReservada = []
    var posTodasBanco = []
    var vagasPost = []

    // Buscas as vagas no banco Livres e Oculpadas
    filters.disp = [1, 3]
    const vagasBanco = await Parking.find(filters).sort({ createdAt: 1 })

    // Busca somente as reservadas
    filters.disp = 2
    const vagasReservada = await Parking.find(filters).sort({ createdAt: 1 })

    // Pegar somente posicao e ordernar
    vagasBanco.map(item => {
      posBanco.sort().push(item.pos)
    })

    vagasReservada.map(item => {
      posReservada.sort().push(item.pos)
    })

    req.body.map(item => {
      pos.sort().push(item.pos)
    })

    posTodasBanco = [...posBanco, ...posReservada]

    // Verifica se existe no banco
    let vagasOculpada = posBanco.filter(x => !pos.includes(x))
    let vagasLivre = posBanco.filter(x => pos.includes(x))
    let vagaReservadaOculpada = posReservada.filter(x => !pos.includes(x))
    let vagaNova = pos.filter(x => !posTodasBanco.includes(x))

    // Atualiza vagas para Oculpadas que nao estao no body e disp != 2
    vagasOculpada.map(async item => {
      let { _id } = await vagasBanco.find(x => x.pos === item)

      await Parking.findByIdAndUpdate(_id, { disp: 3 }, { new: true })
    })

    // Atualiza vagas para Livres que nao estao no body e disp != 2
    vagasLivre.map(async item => {
      let { _id } = await vagasBanco.find(x => x.pos === item)

      await Parking.findByIdAndUpdate(_id, { disp: 1 }, { new: true })
    })

    // Atualiza vagas reservadas (disp = 2) para Oculpadas que não estão no body
    if (vagaReservadaOculpada.length !== 0) {
      vagaReservadaOculpada.map(async item => {
        let { _id } = await vagasReservada.find(x => x.pos === item)

        await Parking.findByIdAndUpdate(_id, { disp: 3 }, { new: true })
      })
    }

    // Criar objeto e envia array para novas vagas e insere as novas no banco
    vagaNova.map(item => {
      let position = {
        pos: item,
        disp: 1
      }
      vagasPost.push(position)
    })

    if (vagasPost.length !== 0) {
      await Parking.create(vagasPost)
    }

    return res.json(vagasPost)
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
