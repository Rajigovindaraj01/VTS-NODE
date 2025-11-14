try {
  let a = JSON.parse("invalid json");
} catch (err) {
  console.error("Error caught:", err.message);
}
