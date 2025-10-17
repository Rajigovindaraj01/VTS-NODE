// Step 1: First task (successful)
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Task 1 complete");
      resolve(1);
    }, 1000);
  });
}

// Step 2: Second task (may fail)
function task2(previousResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Randomly succeed or fail
      if (success) {
        console.log(`✅ Task 2 complete (previous result: ${previousResult})`);
        resolve(previousResult + 1);
      } else {
        reject(new Error("❌ Task 2 failed!"));
      }
    }, 1000);
  });
}

// Step 3: Third task (successful)
function task3(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Task 3 complete (previous result: ${previousResult})`);
      resolve(previousResult + 1);
    }, 1000);
  });
}

// Step 4: Chain promises with error handling
task1()
  .then((result1) => task2(result1))
  .then((result2) => task3(result2))
  .then((finalResult) => {
    console.log("🎉 All tasks completed! Final result:", finalResult);
  })
  .catch((err) => {
    console.error("⚠️ Error occurred in the chain:", err.message);
  });
