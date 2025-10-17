function callAfter1Second(callback) {
  setTimeout(() => {
    callback();
  }, 1000); // 1000 ms = 1 second
}

callAfter1Second(() => {
  console.log("Called after 1 second!");
});
