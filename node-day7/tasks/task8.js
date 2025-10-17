
function riskyTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; 
      if (success) {
        resolve("✅ Task completed successfully!");
      } else {
        reject(new Error("❌ Task failed!"));
      }
    }, 2000);
  });
}


async function executeTask() {
  console.log("⏳ Executing risky task...");

  try {
    const result = await riskyTask(); 
    console.log(result);
  } catch (err) {
    console.error("⚠️ Error caught:", err.message);
  }
}

executeTask();
