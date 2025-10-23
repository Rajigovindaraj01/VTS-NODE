const express = require('express');
const app = express();


const books = [
  { id: 1, title: 'Harry Potter' },
  { id: 2, title: 'The Hobbit' },
  { id: 3, title: 'Learn Node.js' }
];


app.route('/books')
  .get((req, res, next) => {
    console.log('Handler 1: Logging request');
    next();
  })
  .get((req, res) => {
    res.json(books); 
  });


app.listen(3027, () => {
  console.log('Server running on http://localhost:3027');
});
