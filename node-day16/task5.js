app.get('/user/:id', (req, res, next) => {
  const user = null; // imagine database returned null
  if (!user) {
    const err = new Error('User not found');
    err.statusCode = 404;
    return next(err);
  }
  res.send(user);
});


app.get('/bug', (req, res) => {
  // Programming error — variable not defined
  res.send(nonExistingVariable); // ReferenceError
});
