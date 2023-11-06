const { Router } = require('express')

const usersRoutes = Router()
const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)


module.exports = usersRoutes

