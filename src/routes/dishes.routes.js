const { Router } = require('express')

const dishesRoutes = Router()
const DishesController = require('../controllers/DishesController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const dishesController = new DishesController()



dishesRoutes.post('/', ensureAuthenticated, dishesController.create)
dishesRoutes.get('/', dishesController.index)
dishesRoutes.get('/:id', ensureAuthenticated, dishesController.show)
dishesRoutes.put('/:id', ensureAuthenticated, dishesController.update)
dishesRoutes.delete('/:id', ensureAuthenticated, dishesController.delete)


module.exports = dishesRoutes

