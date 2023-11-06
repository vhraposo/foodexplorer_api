const { Router } = require('express')

const dishesRoutes = Router()
const DishesController = require('../controllers/DishesController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const dishesController = new DishesController()

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.post('/:user_id', dishesController.create)
dishesRoutes.get('/', dishesController.index)
dishesRoutes.get('/:id', dishesController.show)
dishesRoutes.delete('/:id', dishesController.delete)


module.exports = dishesRoutes

