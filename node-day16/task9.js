const express = require("express");
const app = express();

const getMovieById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movies = [
        { id: 1, name: "Leo" },
        { id: 2, name: "Vikram" },
      ];
      const movie = movies.find((m) => m.id === parseInt(id));
      if (movie) resolve(movie);
      else reject(new Error("Movie not found"));
    }, 1000);
  });
};


app.get("/movie/:id", async (req, res, next) => {
  try {
    const movie = await getMovieById(req.params.id);
    res.json({ success: true, data: movie });
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});

app.listen(3008, () => {
  console.log("Server running on port http://localhost:3008");
});
