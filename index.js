const connection = require('./model')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
connection()

const cors = require('cors')
app.use(cors())

const lists = require('./controls/lists')
const tasks = require('./controls/tasks')
app.use(express.json())
app.use(lists)
app.use(tasks)
app.use((req, res, next) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
