const express = require('express');
const multer = require('multer');

const router = express.Router();
const foodsController = require('../controllers/foodsController');

const parser = multer({
  storage: multer.diskStorage({
    destination: 'public/imgs',
    filename(req, file, callback) {
      callback(null, file.originalname);
    },
  }),
});

router.get('/', (req, res) => res.redirect('/foods/index'));
router.get('/foods/index', foodsController.index);
router.get('/foods/create', foodsController.create);
router.post('/foods/create/action', parser.single('image'), foodsController.createAction);
router.get('/foods', foodsController.readAll);

module.exports = router;
