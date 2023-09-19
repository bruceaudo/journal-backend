const express = require("express");
const dotenv = require('dotenv')
dotenv.config()
const connectToDB = require("./config/connectToDB.js")
connectToDB(process.env.MONGO_URI)
const app = express();
const port = process.env.PORT || 4000;


app.listen(port, () =>
{
    console.log(`Server is listening on port: ${port}`)
})