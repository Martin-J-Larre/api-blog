const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { dbConnect } = require('./db/config');
const articlesRoute = require('./routes/articlesRoute');

const app = express();
dbConnect()

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', articlesRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});