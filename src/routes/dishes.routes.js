const { Router } = require('express')

const dishesRoutes = Router()
const DishesController = require('../controllers/DishesController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const dishesController = new DishesController()



dishesRoutes.post('/:user_id', ensureAuthenticated, dishesController.create)
dishesRoutes.get('/', dishesController.index)
dishesRoutes.get('/:id', ensureAuthenticated, dishesController.show)
dishesRoutes.delete('/:id', ensureAuthenticated, dishesController.delete)


module.exports = dishesRoutes

