const express = require("express");
const app = express();
app.use(express.json());

let todos = [];

app.post("/todos", (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  todos.push(todo);
  res.json(todo);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
