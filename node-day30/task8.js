const express = require("express");
const app = express();
app.use(express.json());

let todos = [
  { id: 1, title: "Study", completed: true },
  { id: 2, title: "Practice", completed: false }
];

app.get("/todos", (req, res) => {
  const { completed } = req.query;

  if (completed !== undefined) {
    return res.json(
      todos.filter(t => t.completed == (completed === "true"))
    );
  }

  res.json(todos);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
