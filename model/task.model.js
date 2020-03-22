const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  taskname: { type: String, required: true },
  priority: { type: Number, required: true },
  notes: { type: String, required: false },
  duedate: { type: String, required: false },
  done: { type: Boolean, required: true }
})
mongoose.model('Task', TaskSchema)
module.exports = TaskSchema
