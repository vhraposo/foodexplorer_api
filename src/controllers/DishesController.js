const knex = require('../database/knex');

class DishesController {
  async create(request, response) {
    const { name, description, price, image, category, ingredients } = request.body;

    try {

      const [dish_id] = await knex('dishes').insert({
        name,
        description,
        image,
        price,
        category,
      });

     
      const ingredientsInsert = ingredients.map((ingredientName) => {
        return {
          dish_id: dish_id,
          name: ingredientName,
        };
      });

      await knex('ingredients').insert(ingredientsInsert);

      response.status(201).json({ dish_id });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

module.exports = DishesController;