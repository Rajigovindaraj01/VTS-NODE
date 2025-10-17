
const delayedMessage = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Promise resolved after 2 seconds!");
  }, 2000);
});

delayedMessage.then((message) => {
  console.log(message);
});
