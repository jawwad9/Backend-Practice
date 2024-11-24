import express from "express";
import "dotenv/config";

const app = express()
const port = process.env.PORT;

app.get("/",(req,res) => {
    res.send("Hello jawwad!")
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})