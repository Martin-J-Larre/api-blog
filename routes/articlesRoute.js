const router = require('express').Router();
const articlesController = require('../controllers/articlesController');


router.post('/create', articlesController.createArticle);

module.exports = router;