import dotenv from 'dotenv'
dotenv.config();
import express, { json } from 'express';

const app = express();
const port = process.env.PORT;

// middleware 
app.use(express.json())

const users = [
    {
    id: 1,
    title: "jawwad",
},
{
    id: 2,
    title: "anas",
},]


app.get("/", (req, res) => {
    res.send('Hello World!')
})


// get all users
app.get("/users", (req, res) => {
    res.send(users)
});



// new user add
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

// dynamic route and single user
app.get("/user/:id", (req, res) => {
    const {id} = req.params;
    const index = users.findIndex((item) => item.id === +id)
    if (id === -1) {
        return res.status(404).send({ message: "User not found" });
    };    
    res.send(users[index])
})

// delete a user
app.delete("/user/:id", (req, res) => {
    const { id } = req.params;
    const index = users.findIndex((item) => item.id === +id);
    if (index === -1) {
        return res.status(404).send({ message: "User not found"})
    };
    users.splice(index, 1);
    res.send({
        message: "User delete successfully",
        data: users
    });
});
    



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}) 