
async function fetchAndProcessData() {
  try {
    console.log("⏳ Fetching data from mock API...");

    // Fetch data from mock API
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); 
    const processedData = {
      name: data.name,
      email: data.email,
      username: data.username
    };

    console.log("✅ Processed Data:", processedData);
  } catch (err) {
    console.error("⚠️ Error fetching data:", err.message);
  }
}

fetchAndProcessData();
