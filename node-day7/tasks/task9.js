
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


async function countdown(seconds) {
  console.log(`⏳ Countdown starts for ${seconds} seconds:`);

  for (let i = seconds; i > 0; i--) {
    console.log(i);
    await delay(1000);
  }

  console.log("🚀 Countdown complete!");
}


countdown(5);
