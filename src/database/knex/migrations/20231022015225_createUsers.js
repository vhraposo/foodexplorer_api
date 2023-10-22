exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('name')
    table.text('email')
    table.text('password')
    table.boolean('isAdmin').defaultTo(false);
    table.string('avatar').defaultTo('https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_face,r_20,d_avatar.png/non_existing_id.png')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
}) 

exports.down = knex => knex.schema.dropTable('users')