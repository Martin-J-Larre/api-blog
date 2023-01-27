const mongoose = require('mongoose');

const ArticlesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
    default: "default.png"
  }
});

module.exports = mongoose.model("Article", ArticlesSchema);