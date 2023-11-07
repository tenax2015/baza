const Router = require('express')
const dimensionRouter = require('./dimensionRouter')
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const router = new Router()

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/dimension', dimensionRouter)

module.exports = router