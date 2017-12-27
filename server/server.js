import express from 'express'
import path from "path"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"

import apiV1 from "./routes/api"

const app = express()
app.use(bodyParser.json())
mongoose.Promise = Promise
mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true })

const port = process.env.PORT || 5000

app.use("/api/v1", apiV1)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
  })

app.listen(port, () => console.log(`App listening on port ${port}`))