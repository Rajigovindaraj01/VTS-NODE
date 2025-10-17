
function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Promise resolved after 2 seconds!");
    }, 2000);
  });
}


async function showMessage() {
  console.log("⏳ Waiting for the promise...");
  
  try {
    const message = await delayedMessage(); 
    console.log(message);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

showMessage();
