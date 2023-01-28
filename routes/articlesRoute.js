const router = require('express').Router();
const articlesController = require('../controllers/articlesController');


router.post('/create', articlesController.createArticle);
router.get('/articles', articlesController.getArticles);

module.exports = router;