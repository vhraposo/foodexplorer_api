exports.up = knex => knex.schema.createTable('ingredients', table => {
    table.increments('id')
    table.int('dishe_id')
    table.text('name')
    
}) 

exports.down = knex => knex.schema.dropTable('ingredients')