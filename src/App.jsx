import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
  }, [])

  function addTask() {
    if (!title || !description || !dueDate || !priority) {
      alert('Please fill in all fields')
      return
    }

    const newTask = {
      title,
      description,
      dueDate,
      priority,
      completed: false
    }

    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
      .then(() => fetch('http://localhost:5000/tasks'))
      .then(response => response.json())
      .then(data => setTasks(data))

    setTitle('')
    setDescription('')
    setDueDate('')
    setPriority('')
  }

  function deleteTask(taskId) {
    fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'DELETE'
    })
      .then(() => fetch('http://localhost:5000/tasks'))
      .then(response => response.json())
      .then(data => setTasks(data))
  }

  function updateTask(taskId) {
    const taskToUpdate = tasks.find(
      task => task._id === taskId
    )

    fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...taskToUpdate,
        completed: true
      })
    })
      .then(() => fetch('http://localhost:5000/tasks'))
      .then(response => response.json())
      .then(data => setTasks(data))
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Student Task Manager</h1>
          <p>Organize your tasks and improve your efficiency !!</p>

          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <button onClick={addTask}>
            Add Task
          </button>

          <h2>Tasks</h2>

          {tasks.map((task) => (
            <div className="task-card" key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
              <p>Priority: {task.priority}</p>

              <p>
                Status:{' '}
                {task.completed
                  ? 'Completed'
                  : 'Pending'}
              </p>

              <button
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>

              <button
                onClick={() => updateTask(task._id)}
              >
                Mark as Completed
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App