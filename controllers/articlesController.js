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
        message: 'Article could not be saved'
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
  
  const listArticles = Article.find({});

  if (req.params.latest) {
      listArticles.limit(3);
  }

  listArticles.sort({date: -1})
              .exec((error, articles) => {

    if (error || !articles) {
      return res.status(404).json({
        status: 'error',
        message: "It could not find articles"
      });
    }

    return res.status(200).send({
      status: 'seccess',
      counter: articles.length,
      articles
    })
  })
}

exports.getOneArticle = (req, res) => {

  const id = req.params.id;

  Article.findById(id, (error, article) => {

    if (error || !article) {
      return res.status(404).json({
        status: 'error',
        message: "it could not find article"
      });
    }

    return res.status(200).json({
      status: 'success',
      article
    });

  });
}

exports.deleteOneArticle = (req, res) => {

  let id = req.params.id;

  Article.findOneAndDelete({_id: id}, (error, articleDeleted) => {

    if (error || !articleDeleted) {
      return res.status(500).json({
        status: 'error',
        message: 'Error trying delete the article'
      });
    }

    return res.status(200).json({
      status: 'success',
      article: articleDeleted,
      message: 'Article deleted'
    });

  });

}

exports.updateArticle = (req, res) => {

  const { id } = req.params;
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

  Article.findByIdAndUpdate({_id: id}, articleData, {new: true}, (error, articleUpdated) => {

    if (error || !articleUpdated) {
      return res.status(500).json({
        status:'error',
        message: 'Article could not be updated'
      });
    }
    return res.status(200).json({
      status:'success',
      article: articleUpdated
    });
  });
}