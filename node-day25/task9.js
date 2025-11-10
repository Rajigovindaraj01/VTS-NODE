function getDateDifferenceInDays(date1, date2) {

  const diffInMs = Math.abs(date2 - date1);


  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
}


const startDate = new Date("2025-11-01");
const endDate = new Date("2025-11-10");

console.log(`Difference: ${getDateDifferenceInDays(startDate, endDate)} days`);
