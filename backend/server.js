const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const Task = require('./models/Task')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected!')
})

app.get('/', (req, res) => {
  res.send('Backend is running!')
})

app.post('/tasks', async (req, res) => {
  console.log('POST RECEIVED')
  console.log(req.body)

  const task = new Task(req.body)

  await task.save()

  console.log('SAVED TO MONGODB')

  res.send('Task saved!')
})

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find()

  res.json(tasks)
})

app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id)

  res.send('Task deleted!')
})

app.put('/tasks/:id', async (req, res) => {
  await Task.findByIdAndUpdate(
    req.params.id,
    req.body
  )

  res.send('Task updated!')
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})