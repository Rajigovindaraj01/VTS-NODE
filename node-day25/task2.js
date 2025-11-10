const currentDate = new Date();


const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
