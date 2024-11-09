const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample data
let todos = [
    { id: 1, task: "Learn Node.js", completed: false, priority: "medium" },
    { id: 2, task: "Build a REST API", completed: false, priority: "high" }
];

// GET /todos - Retrieve all to-do items
app.get('/todos', (req, res) => {
    res.json(todos);
});

// POST /todos - Add a new to-do item
app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false,
        priority: req.body.priority || 'medium'  // Default to 'medium' if not provided
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT /todos/:id - Update an existing to-do item
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id); // Parse the ID from the URL
  const todo = todos.find(t => t.id === id); // Find the todo by ID
  if (!todo) {
      return res.status(404).send("To-Do item not found"); // Return 404 if not found
  }
  // Update the task and completed status
  todo.task = req.body.task || todo.task;
  todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
  res.json(todo); // Return the updated todo
});


// DELETE /todos/:id - Delete a to-do item
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id); // Parse the ID from the URL
  const index = todos.findIndex(t => t.id === id); // Find the index of the todo by ID
  if (index === -1) {
      return res.status(404).send("To-Do item not found"); // Return 404 if not found
  }
  todos.splice(index, 1); // Remove the todo item from the array
  res.status(204).send(); // Return 204 No Content status
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
