async function fetchData() {
  try {
    throw new Error("Async error!");
  } catch (error) {
    console.error("Caught async error:", error.message);
  }
}
fetchData();
