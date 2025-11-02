class AppError extends Error {
 constructor(message, statusCode) {
 super(message);
 this.statusCode = statusCode;
 this.isOperational = true; 
 }
}
const express = require('express');
const app = express();
const PORT = 3013;
app.get('/custom-error', (req, res, next) => {
 next(new AppError('Resource not found', 404));
});
app.use((err, req, res, next) => {
 const status = err.statusCode || 500; const message = err.message || 'Internal Server Error';
 res.status(status).json({
 status,
 message,
 });
});
app.listen(PORT, () => {
 console.log(`Server running on port http://localhost:${PORT}`);
});
