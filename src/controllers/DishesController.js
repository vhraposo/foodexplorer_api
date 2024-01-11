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

      return response.status(201).json({ dish_id })

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

  async index(request, response) {
    const { category, name } = request.query;
    let dishes;

    if (name) {
      dishes = await knex('dishes')
        .where(function() {
          this.where('name', 'like', `%${name}%`)
            .orWhereExists(function() {
              this.select('dish_id')
                .from('ingredients')
                .whereRaw('dishes.id = ingredients.dish_id')
                .andWhere('name', 'like', `%${name}%`)
            })
        })
        .orderBy('name');
    } else if (category) {
      dishes = await knex('dishes')
        .where('category', 'like', `%${category}%`)
        .orderBy('name')
    } else {
      dishes = await knex('dishes').orderBy('name')
    }
    return response.json(dishes)
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, price, image, category, ingredients } = request.body;
  
    try {
      await knex('dishes')
        .where('id', id)
        .update({
          name,
          description,
          image,
          price,
          category,
        });
  
      await knex('ingredients').where('dish_id', id).del();
  
      const ingredientsInsert = ingredients.map((ingredientName) => {
        return {
          dish_id: id,
          name: ingredientName,
        };
      });
  
      await knex('ingredients').insert(ingredientsInsert);
  
      return response.status(200).json({ message: 'Dish updated successfully' });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Internal server error' });
    }
  }
  
}

module.exports = DishesController;
