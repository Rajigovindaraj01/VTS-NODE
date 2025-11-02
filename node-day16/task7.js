const express = require("express");
const app = express();

app.get("/error", (req, res, next) => {
  const type = req.query.type;

  if (type === "notfound") {
    const err = new Error("Resource not found");
    err.status = 404;
    err.type = "NOT_FOUND";
    return next(err);
  } else if (type === "forbidden") {
    const err = new Error("Access denied");
    err.status = 403;
    err.type = "FORBIDDEN";
    return next(err);
  } else {
    const err = new Error("Something went wrong");
    err.status = 500;
    err.type = "UNKNOWN";
    return next(err);
  }
});

app.use((err, req, res, next) => {
  console.error("Error:", err.message);

  let message;
  switch (err.type) {
    case "NOT_FOUND":
      message = "Sorry, the requested resource was not found!";
      break;
    case "FORBIDDEN":
      message = "You are not allowed to access this resource!";
      break;
    default:
      message = "Internal server error occurred!";
  }

  res.status(err.status || 500).json({
    success: false,
    errorType: err.type || "UNKNOWN",
    message,
  });
});

app.listen(3006, () => {
  console.log("Server running on port http://localhost:3006");
});
