exports.up = knex => knex.schema.createTable('category', table => {
    table.increments('id')
    table.text('name')
}) 

exports.down = knex => knex.schema.dropTable('category')