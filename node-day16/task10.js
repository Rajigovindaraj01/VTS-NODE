const express = require("express");
const app = express();

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};


const getUserById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { id: 1, name: "Rajeshwari" },
        { id: 2, name: "Sandhiya" },
      ];
      const user = users.find((u) => u.id === parseInt(id));
      if (user) resolve(user);
      else reject(new Error("User not found"));
    }, 1000);
  });
};


app.get(
  "/user/:id",
  asyncHandler(async (req, res) => {
    const user = await getUserById(req.params.id);
    res.json({ success: true, data: user });
  })
);
app.use((err, req, res, next) => {
  console.error("Error caught:", err.message);
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});

app.listen(3009, () => {
  console.log("Server running on port http://localhost:3009");
});
