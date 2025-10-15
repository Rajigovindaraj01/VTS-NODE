const os = require('os');

// Operating system platform
console.log('Platform:', os.platform());

// System architecture
console.log('Architecture:', os.arch());

// Total memory (in MB)
console.log('Total Memory:', (os.totalmem() / (1024 * 1024)).toFixed(2), 'MB');

// Free memory (in MB)
console.log('Free Memory:', (os.freemem() / (1024 * 1024)).toFixed(2), 'MB');

// CPU info
console.log('CPU Info:', os.cpus()[0].model);

// Home directory
console.log('Home Directory:', os.homedir());
