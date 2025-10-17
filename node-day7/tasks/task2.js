
const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("❌ Promise rejected! Something went wrong."));
  }, 2000);
});


failedPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err.message);
  });
