exports.up = knex => knex.schema.createTable('dishes', table => {
    table.increments('id')
    table.text('name')
    table.text('description')
    table.float('price')
    table.text('category')
    table.text('image')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
}) 

exports.down = knex => knex.schema.dropTable('dishes')