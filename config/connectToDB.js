const mongoose = require('mongoose');


const connectToDB = (uri) =>
{
    mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully!')
  })
  .catch(error => {
    console.log('Error connecting to mongoDB: ', error)
  })

}

module.exports = connectToDB