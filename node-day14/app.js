const express = require('express');
const app = express();
const PORT = 3003;
const userRouter = require('./samplemini1');
app.use('/users', userRouter);
app.listen(PORT, () => {
 console.log(`Server running on port http://localhost:${PORT}`);
});