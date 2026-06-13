const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: String,
  priority: String,
  completed: Boolean
})

module.exports = mongoose.model('Task', taskSchema)