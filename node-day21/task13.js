const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 25 },
  { id: 4, name: 'David', email: 'david@example.com', age: 28 },
  { id: 5, name: 'Eva', email: 'eva@example.com', age: 22 }
];


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/users', (req, res) => {
  let { page = 1, limit = 2, sortBy = 'id', order = 'asc' } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  let sortedUsers = [...users];

  if (sortBy === 'name') {
    sortedUsers.sort((a, b) => {
      if (order === 'desc') return b.name.localeCompare(a.name);
      return a.name.localeCompare(b.name);
    });
  } else if (sortBy === 'age') {
    sortedUsers.sort((a, b) => (order === 'desc' ? b.age - a.age : a.age - b.age));
  } else {
    sortedUsers.sort((a, b) => (order === 'desc' ? b.id - a.id : a.id - b.id));
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedUsers = sortedUsers.slice(startIndex, endIndex);

  if (paginatedUsers.length === 0) return res.status(404).json({ error: 'No users found for this page' });

  res.json({
    page,
    limit,
    totalUsers: users.length,
    totalPages: Math.ceil(users.length / limit),
    users: paginatedUsers
  });
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
