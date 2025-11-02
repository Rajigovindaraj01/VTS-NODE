const express = require("express");
const app = express();

class AppError extends Error {
  constructor(message, statusCode, type) {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
  }
}


app.get("/error", (req, res, next) => {
  const { type } = req.query;

  if (type === "notfound") {
    return next(new AppError("Movie not found", 404, "NOT_FOUND"));
  } else if (type === "unauthorized") {
    return next(new AppError("Unauthorized access", 401, "UNAUTHORIZED"));
  } else {
    return next(new AppError("Something went wrong", 500, "INTERNAL_ERROR"));
  }
});


app.use((err, req, res, next) => {
  console.error(`Error: ${err.message} | Type: ${err.type}`);

  res.status(err.statusCode || 500).json({
    success: false,
    errorType: err.type || "UNKNOWN",
    message: err.message,
  });
});

app.listen(3007, () => {
  console.log("Server running on port http://localhost:3007");
});
