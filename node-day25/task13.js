const { addDays } = require('date-fns');

const date = new Date("2025-03-09T01:00:00");
const nextDay = addDays(date, 1);

console.log("Original:", date.toString());
console.log("Next Day (DST handled):", nextDay.toString());
