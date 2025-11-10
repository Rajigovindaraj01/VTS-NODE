function scheduleTask(targetTime) {
  const now = new Date();
  const timeDiff = targetTime - now; 

  if (timeDiff <= 0) {
    console.log("⚠️ The scheduled time is in the past!");
    return;
  }

  console.log(`⏳ Task scheduled to run at: ${targetTime.toLocaleTimeString()}`);

  setTimeout(() => {
    console.log("🚀 The scheduled function is now running!");
  }, timeDiff);
}
const futureTime = new Date(new Date().getTime() + 10000);
scheduleTask(futureTime);
