const express = require("express");
const app = express();


class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AppError";
  }
}

app.get("/user/:id", (req, res, next) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return next(new AppError("User ID must be a number.", 400));
  }

  if (userId !== 1) {

    return next(new AppError("User not found.", 404));
  }

  res.json({
    success: true,
    message: `User ${userId} found successfully.`,
  });
});

app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  const status = err.statusCode || 500;

  res.status(status).json({
    success: false,
    error: err.name,
    message: err.message || "Internal Server Error",
  });
});

app.listen(3015, () => {
  console.log("Server running on http://localhost:3015");
});
