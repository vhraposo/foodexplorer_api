const { Router } = require('express')

const usersRoutes = require('./users.routes')
 const dishesRoutes = require('./dishes.routes')


const routes = Router()
routes.use('/users', usersRoutes)
routes.use('/dishes', dishesRoutes)


module.exports = routes