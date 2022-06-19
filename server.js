const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

console.log('hello')

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})

app.get('/', (req, res) => {
  // res.send('<h1>hello</h1>')
  res.sendFile(createPath('index'))
})

app.get('/redirect', (req, res) => {
  res.redirect('/')
})

app.use((req, res) => {
  // res.statusCode = 404
  res
    .status(404)
    .sendFile(createPath('error'))
})
