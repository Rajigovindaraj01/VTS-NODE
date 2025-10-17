
async function riskyTask() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) {
        resolve("✅ Task succeeded!");
      } else {
        reject(new Error("❌ Task failed!"));
      }
    }, 1000);
  });
}

async function retryTask(maxRetries = 3) {
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      attempt++;
      console.log(`Attempt ${attempt}...`);
      const result = await riskyTask();
      console.log(result);
      return; 
    } catch (err) {
      console.warn(err.message);
      if (attempt === maxRetries) {
        console.error("⚠️ All retries failed!");
      } else {
        console.log("Retrying...");
      }
    }
  }
}

retryTask(5); 
