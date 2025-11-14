const express = require("express");
const app = express();
app.use(express.json());

let todos = [
  { id: 1, title: "Learn Express", completed: false }
];

app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo)
    return res.status(404).json({ error: "Todo not found" });

  const { title, completed } = req.body;

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  todo.updatedAt = new Date();

  res.json(todo);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
