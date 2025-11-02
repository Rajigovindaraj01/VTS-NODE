const express = require("express");
const app = express();

app.get("/cause-error", (req, res, next) => {
  throw new Error("Something went wrong in /cause-error route!");
});


app.use((err, req, res, next) => {
  console.error("Error caught:", err.message); 

  res.status(500).json({
    success: false,
    message: "Internal Server Error — please try again later.",
  });
});


app.listen(3014, () => {
  console.log("Server running on http://localhost:3014");
});
