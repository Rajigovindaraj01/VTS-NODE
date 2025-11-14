app.get('/todos', (req, res) => {
 const { completed } = req.query;
 if (completed === undefined) return res.json(todos);
 const isCompleted = completed === 'true';
 const filtered = todos.filter(t => t.completed === isCompleted);
 res.json(filtered);
});