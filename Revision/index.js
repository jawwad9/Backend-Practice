import express from "express";
import "dotenv/config";
import connectDB from "./src/db/index.js";


const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectDB().then(res => {
  app.listen(process.env.PORT,() => {
      console.log(`Server is running on port ${process.env.PORT}`)
  })
}).catch(err => {
  console.log("Mongo Db Connection Failed");
})