const {Dimension} = require('../models/models')
const ApiError = require('../error/ApiError')

class DimensionController {
    async create(req, res) {
        const {id,name} = req.body
        if (!id) {
            return next(ApiError.badRequest('Не задан параметр: ID'))
        }
        if (!name) {
            return next(ApiError.badRequest('Не задан параметр: NAME'))
        }
        const dimension = await Dimension.create({id,name})
        return res.json(dimension)
    }

    async getAll(req, res) {
        const dimensions = await Dimension.findAll()
        return res.json(dimensions)
    }
}

module.exports = new DimensionController()