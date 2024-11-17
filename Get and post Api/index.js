import dotenv from 'dotenv'
dotenv.config();

import express from "express";

const app = express()
const port = process.env.port;

app.use(express.json())

const users = [{
    id: 1,
    name: "John",
}];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send(users)
  })

app.post('/user', (req, res) => {
    const { name } = req.body;
    if(!name){
        res.json({
            message: "Please enter a name"
        })
        return
    }
    users.push({
        id: Date.now(),
        name,
    })
    res.send({
        message: "user added successfully",
        data: users,
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port},${process.env.user}`)
})