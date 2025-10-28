const express = require('express');
const app = express();
const PORT = 3004;
const productRouter = require('./samplemini2');
app.use(express.json());
app.use('/products', productRouter);
app.listen(PORT, () => {
 console.log(`Server running on port http://localhost:${PORT}`);
});