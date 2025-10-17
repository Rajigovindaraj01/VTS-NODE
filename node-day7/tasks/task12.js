
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Task 1 finished"), 3000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("❌ Task 2 failed")), 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Task 3 finished"), 4000);
  });
}

Promise.race([task1(), task2(), task3()])
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((err) => {
    console.error("First promise rejected:", err.message);
  });
