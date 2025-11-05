const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
let users = [];
let nextId = 1; 
app.post('/users', (req, res) => {
 const { name, email, age } = req.body;
 if (!name || !email || !age) {
 return res.status(400).json({ error: 'Name, email, and age are required.' })}
 const newUser = { id: nextId++, name, email, age };
 users.push(newUser);
 res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
 res.json(users);
});

app.get('/users/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const user = users.find(u => u.id === id);
 if (!user) {
 return res.status(404).json({ error: 'User not found.' });
 }
 res.json(user);
});

app.put('/users/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const userIndex = users.findIndex(u => u.id === id);
 if (userIndex === -1) {
 return res.status(404).json({ error: 'User not found.' });
 }
 const { name, email, age } = req.body;
 
 if (!name && !email && !age) {
 return res.status(400).json({ error: 'At least one field (name, email, or age) required to update.' });
 }

 if (name) users[userIndex].name = name;
 if (email) users[userIndex].email = email;
 if (age) users[userIndex].age = age;
 res.json(users[userIndex]);
});

app.delete('/users/:id', (req, res) => {
 const id = parseInt(req.params.id);
 const userIndex = users.findIndex(u => u.id === id);
 if (userIndex === -1) {
 return res.status(404).json({ error: 'User not found.' });
 }
 const deletedUser = users.splice(userIndex, 1);
 res.json({ message: 'User deleted.', user: deletedUser[0] });
});

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});