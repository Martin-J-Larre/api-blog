const router = require('express').Router();
const articlesController = require('../controllers/articlesController');


router.post('/create', articlesController.createArticle);
router.get('/articles/:latest?', articlesController.getArticles);
router.get('/article/:id', articlesController.getOneArticle);
router.delete('/article/:id', articlesController.deleteOneArticle);
router.put('/article/:id', articlesController.updateArticle);

module.exports = router;