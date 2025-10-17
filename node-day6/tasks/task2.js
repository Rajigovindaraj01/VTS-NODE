function randomOperation(callback) {
  const success = Math.random() > 0.5; 

  setTimeout(() => {
    if (success) {
      callback(null, "Operation successful! ✅");
    } else {
      callback(new Error("Operation failed! ❌"), null);
    }
  }, 1000);
}


randomOperation((err, result) => {
  if (err) {
    console.error("Error:", err.message);
  } else {
    console.log("Result:", result);
  }
});
