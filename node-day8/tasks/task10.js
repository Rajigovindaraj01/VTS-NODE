console.log("Start");

// Simulated network request
function fakeNetworkRequest(url, callback) {
    console.log(`Sending request to ${url}...`);
    
    setTimeout(() => {
        const fakeData = { data: "Response from " + url };
        callback(fakeData);
    }, 2000); // Simulate 2-second network delay
}

// Using the simulated network request
fakeNetworkRequest("https://api.example.com", (response) => {
    console.log("Received response:", response);
});

console.log("After sending request");
