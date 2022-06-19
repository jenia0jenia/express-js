const express = require('express')
const path = require('path')
const logger = require('./logger')

const app = express()

const PORT = 3000

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

let posts = [
  {
    id: 1,
    name: 'Title 1'
  }, {
    id: 2,
    name: 'Title 2'
  }, {
    id: 3,
    name: 'Title 3'
  },
]

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})

// app.use('/posts', logger)

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(createPath('index'))
})

app.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'))
})

app.get('/posts/:id', (req, res) => {
  let postId = posts[0].id
  let post 

  for (let i = 0; i < posts.length; i++) {
    if (String(posts[i].id) === req.params.id) {
      post = posts[i]
      break
    }
  }

  // element = posts.find((post) => post.id === req.params.id)

  console.log(post)
  res.json(post)
  // res.sendFile(createPath('post'))
})

app.get('/posts', (req, res) => {
  let { param1 } = req.query
  console.log(param1)
  res.sendFile(createPath('posts'))
})

app.get('/add-post', (req, res) => {
  res.sendFile(createPath('add-post'))
})

// app.post('/add-post', (req, res) => {
//   // console.log(req.params)
//   // console.log(req.body)
//   let { title } = req.body
//   if (title === 'John')
//     res.json(req.body)
//   else {
//     res
//       .status(404) // либо res.statusCode = 404
//       .sendFile(createPath('error'))
//   }
// })

// роутинг
// app.get
// app.post
// app.put
// app.delet

// прослушивание сервера
// app.listen

// app.use

app.use((req, res) => {
  res
    .status(404) // либо res.statusCode = 404
    .sendFile(createPath('error'))
})
