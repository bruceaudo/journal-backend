const express = require("express");
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const connectToDB = require('./config/connectToDB.js')
const journalRoutes = require("./routes/journalRoute.js")
connectToDB(process.env.MONGO_URI)
const app = express();

const corsOptions = {
    orign: "http://localhost:3000",
    methods: 'GET, POST, PUT, DELETE'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/v1/journal", journalRoutes)

const port = process.env.PORT || 4000;
app.listen(port, () =>
{
    console.log(`Server is listening on port: ${port}`)
})