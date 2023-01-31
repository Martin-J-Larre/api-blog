const router = require('express').Router();
const multer = require('multer');
const articlesController = require('../controllers/articlesController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/articles');
  },
  filename: (req, file, cb) => {
    cb(null, 'article' + Date.now() + file.originalname)
  }
});

const uploads = multer({ storage })

router.post('/create', articlesController.createArticle);
router.post('/upload-img/:id',[uploads.single('file')], articlesController.uploadImg);
router.get('/image/:file', articlesController.showImg);
router.get('/articles/:latest?', articlesController.getArticles);
router.get('/article/:id', articlesController.getOneArticle);
router.get('/search/:article', articlesController.searchArticle);
router.delete('/article/:id', articlesController.deleteOneArticle);
router.put('/article/:id', articlesController.updateArticle);

module.exports = router;