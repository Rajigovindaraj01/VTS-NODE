const express = require('express');
const app = express();
const PORT = 3013;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let messages = [];


app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;


  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }


  const newMessage = { id: messages.length + 1, name, email, message };
  messages.push(newMessage);

  res.status(201).json({
    message: `Thank you, ${name}! Your message has been received.`,
    receivedMessage: newMessage
  });
});

app.get('/contact/messages', (req, res) => {
  res.json({ total: messages.length, messages });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
