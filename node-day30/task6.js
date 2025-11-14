const express = require("express");
const app = express();
app.use(express.json());

let todos = [
  { id: 1, title: "Learn Express", completed: false }
];

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1)
    return res.status(404).json({ error: "Todo not found" });

  const removed = todos.splice(index, 1);

  res.json(removed[0]);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
