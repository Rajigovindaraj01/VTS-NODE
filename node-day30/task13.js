const express = require("express");
const router = express.Router();

let todos = [
  { id: 1, title: "Modular Routing", completed: false }
];

router.get("/", (req, res) => {
  res.json(todos);
});

module.exports = router;
