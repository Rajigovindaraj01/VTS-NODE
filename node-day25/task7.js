function parseAndValidateDate(dateString) {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    console.log("❌ Invalid date format!");
  } else {
    console.log("✅ Valid date:", date.toDateString());
  }
}

parseAndValidateDate("2025-11-10");
parseAndValidateDate("10/11/2025");
parseAndValidateDate("invalid-date");
