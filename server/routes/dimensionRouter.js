const Router = require('express')
const dimensionController = require('../controllers/dimensionController')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), dimensionController.create)
router.get('/', dimensionController.getAll)

module.exports = router