import express from "express";
import dotenv from "dotenv"
dotenv.config();
import connectDb from "./src/db/index.js";
import bcrypt from "bcrypt"
import cors from "cors"


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world!")
})

// bcrypt password
const encrypt = "$2b$10$eza2WdScTzrO2uyW7qqhl.ll2W1ugvN4zO1pVsf.p4uoObsjsNnI."


// bcrypt password create
app.post("/encryptpassword", (req, res) => {
    const { password } = req.body;
    bcrypt.hash(password, 10, function(err, hash) {
        if (err) return res.status(402).json({ message: "password error"});
        res.json({ password: hash })
    });
})


// bcrypt check password 
app.post("/checkPassword", (req, res) => {
    const { password } = req.body;
    bcrypt.compare(password, encrypt, function(err, result) {
        if (err) return res.status(402).json({ message: "occured password"});
        if (!result) return res.status(404).json({ message: "incorrect password" });

        res.json({ message: "User logged in Successfully" })
    });
})


// MONGO DB and Server connection
connectDb().then(() => {
app.listen(process.env.PORT, () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
})
}).catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
})