const {Product, Dimension} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class ProductController {
    async create(req, res, next) {
        try {
            let {name, inv_number, ser_number, quantity, price, date, note, dimensionId} = req.body
            if ((!ser_number) || (ser_number=="")) ser_number="б/н"
            if (!note) note=""
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name, inv_number, ser_number, quantity, price, date, note, dimensionId, img: fileName})
            return res.json(product)
        }   catch (e) {
            next(ApiError.badRequest(e.message))
        }
      
    }

    async getAll(req, res) {
        let products = await Product.findAll()
        return res.json(products)
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: Dimension}]
            }
        )
        return res.json(product)
    }
}

module.exports = new ProductController()