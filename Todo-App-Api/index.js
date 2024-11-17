import dotenv from 'dotenv'
dotenv.config();
import express, { json } from 'express';

const app = express();
const port = process.env.PORT;


app.use(express.json())

const users = [{
    id: 1,
    title: "jawwad",
}]


app.get("/", (req, res) => {
    res.send('Hello World!')
})
// get all users
app.get("/users", (req, res) => {
    res.send(users)
});

// user add
app.post("/user", (req, res) => {
    const { title } = req.body;
    if(!title){
        res.json({
            message: "Please enter a title",
        })
        return
    }
    users.push({
        id: users.length + 1,
        title,
    })
    res.send({
        message: "User created successfully",
        data: users
    })
})
    


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}) 