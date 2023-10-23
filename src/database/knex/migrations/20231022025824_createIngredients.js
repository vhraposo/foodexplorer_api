exports.up = knex => knex.schema.createTable('ingredients', table => {
    table.increments('id')
    table.integer('dish_id').references('id').inTable('dishes').onDelete('CASCADE')
    table.text('name')
    
}) 

exports.down = knex => knex.schema.dropTable('ingredients')