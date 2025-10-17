// Step 1: First promise
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Task 1 complete");
      resolve(1); // pass data to next task
    }, 1000);
  });
}

// Step 2: Second promise
function task2(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Task 2 complete (previous result: ${previousResult})`);
      resolve(previousResult + 1);
    }, 1000);
  });
}

// Step 3: Third promise
function task3(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Task 3 complete (previous result: ${previousResult})`);
      resolve(previousResult + 1);
    }, 1000);
  });
}

// Step 4: Chain promises
task1()
  .then((result1) => task2(result1))
  .then((result2) => task3(result2))
  .then((finalResult) => {
    console.log("🎉 All tasks completed! Final result:", finalResult);
  })
  .catch((err) => {
    console.error("Error in tasks:", err.message);
  });
