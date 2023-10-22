const config = require('../../../knexfile')
const knex = require('knex')

const connection = knex(config.developement)

module.exports = connection