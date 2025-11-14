function validateTodo(req, res, next) {
 const { title } = req.body;
 if (!title || typeof title !== 'string' || title.trim() === '') {
 return res.status(400).json({ error: 'Invalid or missing title' });
 }
 next();
}
app.post('/todos', validateTodo, (req, res) => {
 app.post('/todos', (req, res) => {
 const { title, completed = false } = req.body;
 if (!title) return res.status(400).json({ error: 'Title is required' });
 const newTodo = { id: nextId++, title, completed };
 todos.push(newTodo);
 res.status(201).json(newTodo);
});
});