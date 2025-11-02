const express = require("express");
const app = express();
const NODE_ENV = process.env.NODE_ENV || "development";

app.get("/error", (req, res, next) => {
  try {
    throw new Error("Sensitive error: Database connection failed!");
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  if (NODE_ENV === "production") {
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  } else {
    res.status(500).json({
      success: false,
      message: err.message,
      stack: err.stack,
    });
  }
});
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.listen(3011, () => {
  console.log(`Server running on http://localhost:3011 in ${NODE_ENV} mode`);
});
