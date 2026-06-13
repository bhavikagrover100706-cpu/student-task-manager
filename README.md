# Student Task Manager

A full-stack task management application built using React, Express.js, MongoDB Atlas, and Mongoose.

## Features

* Create tasks
* View tasks
* Update task status
* Delete tasks
* Persistent storage using MongoDB Atlas
* REST API integration between frontend and backend

## Tech Stack

### Frontend

* React
* Vite
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

## Project Structure

student-task-manager/

├── src/                 # React frontend

├── backend/

│   ├── models/

│   └── server.js

├── package.json

└── README.md

## Installation

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
node server.js
```

## API Endpoints

### Get all tasks

```http
GET /tasks
```

### Create task

```http
POST /tasks
```

### Update task

```http
PUT /tasks/:id
```

### Delete task

```http
DELETE /tasks/:id
```

## Learning Outcomes

This project helped me learn:

* React state management using useState
* React lifecycle using useEffect
* REST APIs
* Express.js routing
* MongoDB Atlas integration
* Mongoose models and schemas
* Full-stack CRUD application development

## Author

Bhavika Grover
MEng Computer Science
University of Birmingham
