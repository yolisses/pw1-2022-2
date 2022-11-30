const express = require("express");
const router = express.Router();
const foodsController = require("../controllers/foodsController");
const categoriesController = require("../controllers/categoriesController");

router.get("/", (req, res) => res.redirect("/foods/index"));

router.get("/foods/add", foodsController.addPage);
router.get("/foods/index", foodsController.index);
router.get("/foods", foodsController.readAll);

router.post("/foods", foodsController.create);
router.put("/foods/:id", foodsController.update);
router.delete("/foods/:id", foodsController.destroy);

router.get("/categories", categoriesController.readAll);

module.exports = router;
