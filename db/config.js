const mongoose = require('mongoose');


const dbConnect = () => {
  mongoose.set('strictQuery', false);
  mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DATABASE CONNECTED');
  })
  .catch((err) => {
    console.log(err);
    throw new Error('CONNECTION ERROR');
  });
}

module.exports = {
  dbConnect
}