
function fetchUserData(callback) {
  console.log("Fetching user data... ⏳");

  setTimeout(() => {

    const user = {
      id: 101,
      name: "Rajeshwari",
      email: "rajeshwari@example.com",
      role: "MERN Stack Developer",
    };

    callback(null, user);
  }, 2000); 
}


function printUserInfo(err, data) {
  if (err) {
    console.error("Error fetching user data:", err.message);
    return;
  }

  console.log("✅ User Data Received:");
  console.log(`ID: ${data.id}`);
  console.log(`Name: ${data.name}`);
  console.log(`Email: ${data.email}`);
  console.log(`Role: ${data.role}`);
}


fetchUserData(printUserInfo);
