function fetchData(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
    const success = Math.random() > 0.5; // Randomly succeed or fail

    if (success) {
      callback(null, { id: 1, name: "Rajeshwari", role: "MERN Stack Developer" });
    } else {
      callback(new Error("Failed to fetch data! ❌"), null);
    }
  }, 1000);
}

// Example usage:
fetchData((err, data) => {
  if (err) {
    console.error("Error:", err.message);
  } else {
    console.log("Data fetched successfully ✅:", data);
  }
});
