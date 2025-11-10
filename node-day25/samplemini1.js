let count = 0;
const intervalId = setInterval(() => {
 console.log(`Current Date and Time: ${new Date().toLocaleString()}`);
 count++;
 if (count === 5) {
 clearInterval(intervalId);
 console.log('Stopped logging after 5 times');
 }
}, 1000);