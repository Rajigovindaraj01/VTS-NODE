const inputDate = process.argv[2];
if (!inputDate) {
 console.log('Please provide a date string as an argument');
 process.exit(1);
}
const date = new Date(inputDate);
if (isNaN(date)) {
 console.log('Invalid date');
 process.exit(1);
}
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
'Friday', 'Saturday'];
console.log(`You entered: ${date.toISOString()}`);
console.log(`Day of the Week: ${daysOfWeek[date.getDay()]}`);
console.log(`Formatted Date: ${date.toLocaleDateString()}`);