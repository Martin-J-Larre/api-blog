const validator = require('validator');

const validateArticle = (data) => { 

  const title = !validator.isEmpty(data.title) && validator.isLength(data.title, {min: 3, max: undefined});
  const content = !validator.isEmpty(data.content);

  if (!title || !content) {
    throw new Error("It could not validate infomation");
  }
}

module.exports = {
  validateArticle
}

