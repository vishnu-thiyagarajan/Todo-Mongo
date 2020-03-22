const TaskSchema = require('./task.model')
const mongoose = require('mongoose')
const ListSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  listname: { type: String, required: true },
  tasks: [TaskSchema]
})
mongoose.model('List', ListSchema)
