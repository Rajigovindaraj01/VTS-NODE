function startCountdown(seconds) {
  let remaining = seconds;

  console.log(`⏳ Countdown started for ${seconds} seconds!`);

  const intervalId = setInterval(() => {
    console.log(`Remaining: ${remaining} seconds`);
    remaining--;


    if (remaining < 0) {
      clearInterval(intervalId);
      console.log(" Time's up!");
    }
  }, 1000);
}


startCountdown(10);
