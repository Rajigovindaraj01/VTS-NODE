//async data fetch
function fetchUserData(callback) {
  setTimeout(() => {
    const data = {
      id: 101,
      name: "Rajeshwari",
      role: "MERN Stack Developer",
      location: "Thanjavur"
    };
    callback(null, data); // error-first callback
  }, 1000);
}

// Callback function to format and log data
function formatAndLog(err, data) {
  if (err) {
    console.error("Error fetching data:", err.message);
    return;
  }

  // Format the data
  const formatted = `User Info:
  Name: ${data.name}
  Role: ${data.role}
  Location: ${data.location}
  ID: ${data.id}`;

  console.log(formatted);
}


fetchUserData(formatAndLog);
