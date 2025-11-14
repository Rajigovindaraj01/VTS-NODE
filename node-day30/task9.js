const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => res.send("Logging working"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
