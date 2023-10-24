const { Router } = require('express')

const usersRoutes = require('./users.routes')
const ingredientsRoutes = require('./ingredients.routes')
 const dishesRoutes = require('./dishes.routes')



const routes = Router()
routes.use('/users', usersRoutes)
routes.use('/ingredients', ingredientsRoutes)
routes.use('/dishes', dishesRoutes)


module.exports = routes