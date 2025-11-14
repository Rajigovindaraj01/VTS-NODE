function readData(callback) {
  const err = new Error("Something went wrong!");
  callback(err, null); 
}

readData((error, data) => {
  if (error) {
    console.error("Callback Error:", error.message);
  }
});
