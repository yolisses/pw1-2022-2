const express = require("express");
const router = express.Router();
const foodsController = require("../controllers/foodsController");
const categoriesController = require("../controllers/categoriesController");

router.get("/", (req, res) => res.redirect("/foods/index"));

router.get("/foods/add", foodsController.add);
router.get("/foods/index", foodsController.index);
router.post("/foods/remove/:id", foodsController.destroy);
router.get("/foods", foodsController.readAll);

router.post("/foods", foodsController.create);
router.put("/foods/:id", foodsController.update);
router.delete("/foods/:id", foodsController.destroy);

router.get("/categories", categoriesController.readAll);

module.exports = router;
