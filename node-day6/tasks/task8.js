function countdown(seconds, callback) {
  console.log(`⏳ Countdown started for ${seconds} seconds...`);

  const timer = setInterval(() => {
    console.log(seconds);
    seconds--;

    if (seconds < 0) {
      clearInterval(timer);
      callback(); 
    }
  }, 1000);
}

countdown(5, () => {
  console.log("🚀 Countdown complete!");
});
