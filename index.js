const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample data
let todos = [
  { id: 1, task: "Learn Node.js", completed: false },
  { id: 2, task: "Build a REST API", completed: false }
];

// GET /todos - Retrieve all to-do items
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// POST /todos - Add a new to-do item
app.post('/todos', (req, res) => {
    const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
    });