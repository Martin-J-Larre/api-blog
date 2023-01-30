const fs = require('fs');
const path = require('path');
const Article = require('../models/ArticlesModel');
const { validateArticle } = require('../utils/validator');

exports.createArticle = (req, res) => {

  const articleData = req.body;

  try {
    validateArticle(articleData);

  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: 'Client did not sent data'
    });
  }

  const article = new Article(articleData);

  article.save((error, articleSaved) => {

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

  listArticles.sort({ date: -1 })
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

exports.updateArticle = (req, res) => {

  const { id } = req.params;
  const articleData = req.body;

  try {
    validateArticle(articleData)

  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: 'Client did not sent data'
    })
  }

  Article.findByIdAndUpdate({ _id: id }, articleData, { new: true }, (error, articleUpdated) => {

    if (error || !articleUpdated) {
      return res.status(500).json({
        status: 'error',
        message: 'Article could not be updated'
      });
    }
    return res.status(200).json({
      status: 'success',
      article: articleUpdated
    });
  });
}

exports.deleteOneArticle = (req, res) => {

  let id = req.params.id;

  Article.findOneAndDelete({ _id: id }, (error, articleDeleted) => {

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

exports.uploadImg = (req, res) => {

  if (!req.file && !req.files) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid request'
    })
  }

  const originalName = req.file.originalname;
  const originalName_split = originalName.split('\.');
  const extension = originalName_split[1]

  if (extension != 'png' && extension != 'jpg' &&
    extension != 'jpeg' && extension != 'gif') {
    fs.unlink(req.file.path, (error) => {
      return res.status(400).json({
        status: 'error',
        message: 'File\'s format not valid'
      })
    });
  } else {
    
    const { id } = req.params;

    Article.findByIdAndUpdate({ _id: id }, { image: req.file.filename }, { new: true }, (error, articleUpdated) => {

      if (error || !articleUpdated) {
        return res.status(500).json({
          status: 'error',
          message: 'Article could not be updated'
        });
      }
      return res.status(200).json({
        status: 'success',
        article: articleUpdated,
        files: req.file
      });
    });
  }
}

exports.showImg = (req, res) => {
  const imgFile = req.params.file;
  const pathFile = `./images/articles/${imgFile}`;

  fs.stat(pathFile, (error, exist) => {
    if (exist) {
      return res.sendFile(path.resolve(pathFile));
    } else {
      return res.status(404).json({
        status: 'error',
        message: 'Image does not exist'
      });
    }
  })
}

exports.searchArticle = (req, res) => {
  let search = req.params.article;

  Article.find({'$or': [
    {'title': {'$regex': search, '$options': 'i'}},
    {'content': {'$regex': search, '$options': 'i'}}
  ]})
  .sort({fecha: -1})
  .exec((error, articlesFound) =>  {

    if (error || !articlesFound || articlesFound.length <=0) {
      return res.status(404).json({
        status: 'error',
        message: 'Articles could not be found'
      });
    }

    return res.status(200).json({
      status: 'success',
      articlesFound
    });
  });
}