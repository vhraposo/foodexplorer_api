const { Router } = require('express')

const dishesRoutes = Router()
const DishesController = require('../controllers/DishesController')

const dishesController = new DishesController()

dishesRoutes.post('/:user_id', dishesController.create)
dishesRoutes.get('/:id', dishesController.show)




module.exports = dishesRoutes

