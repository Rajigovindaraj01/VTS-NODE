const fs = require('fs');

fs.unlink('log.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('log.txt has been deleted successfully!');
  }
});
