const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Route error!");
});

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});

app.listen(3000);
