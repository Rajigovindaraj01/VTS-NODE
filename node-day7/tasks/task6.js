
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Task 1 done");
      resolve(1);
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Task 2 done");
      resolve(2);
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Task 3 done");
      resolve(3);
    }, 1500);
  });
}


Promise.all([task1(), task2(), task3()])
  .then((results) => {
    console.log("🎉 All tasks completed in parallel! Results:", results);
  })
  .catch((err) => {
    console.error("⚠️ Error in one of the tasks:", err.message);
  });
