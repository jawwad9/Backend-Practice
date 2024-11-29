import express from "express";
import dotenv from "dotenv"
dotenv.config();
import connectedDb from "./src/db.js";


const app = express();

app.get("/",(req,res) => {
    res.send("hello world")
})


connectedDb().then(() => {
app.listen(process.env.PORT, () => {
    console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
})
}).catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
})