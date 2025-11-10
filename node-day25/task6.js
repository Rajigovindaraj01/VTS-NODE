const intervalId = setInterval(() => {
  const now = new Date();
  console.log("Current Time:", now.toLocaleTimeString());
}, 2000); 

setTimeout(() => {
  clearInterval(intervalId);
  console.log("⏹ Interval stopped after 10 seconds!");
}, 10000);