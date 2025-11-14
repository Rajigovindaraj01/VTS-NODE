const express = require("express");
const app = express();
app.use(express.json());

function validateTodo(req, res, next) {
  if (!req.body.title) {
    return res.status(400).json({ error: "Title is required" });
  }
  next();
}

let todos = [];

app.post("/todos", validateTodo, (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title
  };
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
