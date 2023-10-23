const knex = require('../database/knex');

class DishesController {
  async create(request, response) {
    const { name, description, price, image, category, ingredients } = request.body

    try {

      const [dish_id] = await knex('dishes').insert({
        name,
        description,
        image,
        price,
        category,
      })

      const ingredientsInsert = ingredients.map((name) => {
        return {
          dish_id,
          name,
        }
      })

      await knex('ingredients').insert(ingredientsInsert)

      response.status(201).json({ dish_id })

    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Internal server error' })
    }
  }

  async show(request, response){
    const { id } = request.params
    const dish = await knex('dishes').where({ id }).first()

    if(!dish){
      return response.status(404).json({error: 'Dish not found'})
    }

    const ingredients = await knex('ingredients').where({ dish_id: id}).orderBy('name')

    if (ingredients.length === 0) {
      return response.status(404).json({ error: 'Dish has no associated ingredients' });
    }

    return response.json({
        ...dish,
        ingredients
    })
  }

  async delete(request, response){
    const { id } = request.params
    
    await knex('dishes').where({ id }).delete()

    return response.json()
  }

  async index(request, response){
    const { category } = request.query

    const dishes = await knex('dishes')
    .orderBy('name')
    .whereLike('category', `%${category}%`)

    return response.json(dishes)
  }
}

module.exports = DishesController;
