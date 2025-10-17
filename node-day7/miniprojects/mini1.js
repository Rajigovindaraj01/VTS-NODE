
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function runTimer() {
  console.log("⏳ Timer started...");

  await wait(1000);
  console.log("1 second passed");

  await wait(2000);
  console.log("2 more seconds passed (3 seconds total)");

  await wait(1000);
  console.log("1 more second passed (4 seconds total)");

  console.log("🚀 Timer complete!");
}


runTimer();
