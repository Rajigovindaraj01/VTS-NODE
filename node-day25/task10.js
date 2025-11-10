
const { format } = require('date-fns');

const currentDate = new Date();


const formattedDate = format(currentDate, "EEEE, MMMM do yyyy, h:mm a");

console.log("Formatted Date:", formattedDate);
