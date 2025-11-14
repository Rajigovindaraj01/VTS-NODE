const express = require("express");
const app = express();
app.use(express.json());

let todos = [
  { id: 1, title: "Learn Node.js", completed: false }
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
