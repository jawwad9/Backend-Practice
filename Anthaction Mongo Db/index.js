import express from "express";
import dotenv from "dotenv"
dotenv.config();
import connectDb from "./src/db/index.js";


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world!")
})


connectDb().then(() => {
app.listen(process.env.PORT, () => {
    console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
})
}).catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
})