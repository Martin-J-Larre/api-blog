const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { dbConnect } = require('./db/config');
const articlesRoute = require('./routes/articlesRoute');

const app = express();
dbConnect()

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', express.static(path.join(__dirname, '/public')));


app.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'views', 'index.html'))
});
app.use('/api', articlesRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});