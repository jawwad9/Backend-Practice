import express from 'express'


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello jawwad!')
})


app.get('/about', (req, res)=> {
    res.send('about')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})