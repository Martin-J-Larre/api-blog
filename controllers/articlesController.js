const validator = require('validator');
const Article = require('../models/ArticlesModel');


exports.createArticle = (req, res) => {
  
  const articleData = req.body;

  try {
    const title = !validator.isEmpty(articleData.title) && validator.isLength(articleData.title, {min: 3, max: undefined});
    const content = !validator.isEmpty(articleData.content);

    if (!title || !content) {
      throw new Error("It could not validate infomation");
    }

  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: 'Client did not sent data'
    })
  }

  const article = new Article(articleData);

  article.save((error, articleSaved)=> {

    if (error || !articleSaved) {
      return res.status(400).json({
        status: 'error',
        message: 'Article could not be save'
      })
    }

    return res.status(200).json({
      status: 'success',
      article: articleSaved,
      message: 'Article saved successfully'
    })
  })
} 

exports.getArticles = (req, res) => {
  
  Article.find({}).exec((error, articles) => {

    if (error || !articles) {
      return res.status(404).json({
        status: 'error',
        message: "It could not find articles"
      });
    }

    return res.status(200).send({
      status: 'seccess',
      articles
    })
  })
}
