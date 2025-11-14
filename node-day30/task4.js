const express = require("express");
const app = express();
app.use(express.json());

let todos = [];

app.post("/todos", (req, res) => {
  const { title } = req.body;

  if (!title)
    return res.status(400).json({ error: "Title required" });

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
