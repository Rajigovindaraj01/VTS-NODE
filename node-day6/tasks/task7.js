// Step 1: A normal synchronous function
function add(a, b) {
  return a + b;
}

// Step 2: Convert it to an async version using callback and setTimeout
function addAsync(a, b, callback) {
  setTimeout(() => {
    try {
      const result = add(a, b); 
      callback(null, result);   
    } catch (err) {
      callback(err, null);      
    }
  }, 1000);
}

console.log("Calculating...");
addAsync(5, 10, (err, result) => {
  if (err) {
    console.error("Error:", err.message);
  } else {
    console.log("Result after 1 second:", result);
  }
});
