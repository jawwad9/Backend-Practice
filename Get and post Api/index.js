import express from "express";

const app = express()
const port = 3000


const users = [{
    id: 1,
    name: "John",
}];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send('users')
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})