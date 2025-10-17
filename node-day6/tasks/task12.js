
function processData(callback) {
  setTimeout(() => {
    try {
      callback();
    } catch (err) {
      console.error("Caught an error inside callback:", err.message);
    }
  }, 1000);
}

processData(() => {
  console.log("Processing data...");

  throw new Error("Something went wrong!");
});
