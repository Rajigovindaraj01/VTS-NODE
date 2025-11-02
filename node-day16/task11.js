const express = require("express");
const winston = require("winston");
const app = express();

const logger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: "error.log" }), // Logs to file
    new winston.transports.Console(), 
  ],
});


app.get("/divide", (req, res, next) => {
  try {
    const a = 10;
    const b = 0;
    if (b === 0) throw new Error("Division by zero is not allowed!");
    res.send(`Result: ${a / b}`);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    route: req.originalUrl,
  });

  res.status(500).json({
    success: false,
    message: "Something went wrong! Check logs for details.",
  });
});

app.listen(3010, () => {
  console.log("Server running on port http://localhost:3010");
});
