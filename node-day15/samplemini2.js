const express = require('express');
const app = express();
const PORT = 3013;
app.get('/products', (req, res) => {
 const { category, maxPrice } = req.query;
 res.json({
 message: 'Filtered products',
 filters: {
 category: category || 'all',
 maxPrice: maxPrice || 'no limit',
 }
 });
});
app.listen(PORT, () => {
 console.log(`Server running on port http://localhost:${PORT}`);
});
