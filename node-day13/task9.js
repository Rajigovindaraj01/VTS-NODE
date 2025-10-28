const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));


app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Form submitted successfully!<br>Name: ${name}<br>Email: ${email}`);
});


app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <input type="text" name="name" placeholder="Enter your name" required /><br>
      <input type="email" name="email" placeholder="Enter your email" required /><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.listen(3019, () => {
  console.log('Server running on http://localhost:3019');
});
