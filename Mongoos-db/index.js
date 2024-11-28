import express from "express";
import "dotenv/config";
import connectDB from "./src/db/index.js";
import todosRoutes from "./src/routes/todos.routes.js";

const app = express()
const port = process.env.PORT;
app.use(express.json());



app.get("/",(req,res) => {
    res.send("Hello World")
})

// routes
app.use("/api/v1", todosRoutes);



connectDB().then(res => {
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
}).catch(err => {
    console.log("Mongo Db Connection Failed");
})

