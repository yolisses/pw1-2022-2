const Food = require("../models/Food");
const Category = require("../models/Category");

const add = async (req, res) => {
  const categories = await Category.readAll();

  res.render("foods/add.njk", { categories, food: {} });
};

const edit = async (req, res) => {
  const { id } = req.params;
  const food = await Food.readById(id);
  const categories = await Category.readAll();
  res.render("foods/add.njk", { food, categories });
};

const index = async (req, res) => {
  const foods = await Food.readAll();

  const categories = await Category.readAll();

  res.render("foods/index.njk", { foods, categories });
};

const readAll = async (req, res) => {
  const foods = await Food.readAll();

  res.json(foods);
};

const create = async (req, res) => {
  const { name, image, price, category_id } = req.body;

  const newFood = { name, image, price, category_id };

  const foodId = await Food.createAutoInc(newFood);

  const food = await Food.readById(foodId);

  res.redirect("/foods/index");
};

const update = async (req, res) => {
  const { id } = req.params;

  const { name, image, price, category_id } = req.body;

  const updateFood = { name, image, price, category_id };

  await Food.update(id, updateFood);

  const food = await Food.readById(id);

  res.json(food);
};

const destroy = async (req, res) => {
  const { id } = req.params;

  await Food.destroy(id);

  res.redirect("/foods/index");
};

module.exports = {
  index,
  readAll,
  create,
  update,
  destroy,
  add,
  edit,
};
