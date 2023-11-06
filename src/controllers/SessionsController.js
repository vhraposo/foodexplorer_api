const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const { compare } = require('bcryptjs')

class SessionsController{
    async create(request, response){
        const { email, password } = request.body

        const user = await knex("users").where({email}).first()

        if(!user){
            throw new AppError("Email ou senha incorretos", 401)
        }
        const passwordMatched = await compare(password, user.password)

        if(!passwordMatched){
            throw new AppError("Email ou senha incorretos", 401)
        }
        


        return response.json(user)
    }
}

module.exports = SessionsController;