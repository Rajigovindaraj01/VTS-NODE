// const express = require('express');
// const router = express.Router();


// const users = [
//   { id: 1, name: 'Rajeshwari' },
//   { id: 2, name: 'Sandhiya' },
// ];

// router.get('/', (req, res) => {
//   res.json(users);
// });

// module.exports = router;



// //task9
// const express = require('express');
// const router = express.Router();
// const orderRouter = require('./orders'); 
// const users = [
//   { id: 1, name: 'Rajeshwari' },
//   { id: 2, name: 'Sandhiya' },
// ];
// router.get('/', (req, res) => {
//   res.json(users);
// });

// router.use('/:id/orders', orderRouter);

// module.exports = router;














// //task12
// const express = require('express');
// const router = express.Router();

// const users = [
//   { id: 1, name: 'Rajeshwari' },
//   { id: 2, name: 'Sandhiya' },
// ];

// router.get('/', (req, res) => {
//   res.json(users);
// });

// router.get('/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const user = users.find(u => u.id === userId);

//   if (!user) return res.status(404).json({ error: 'User not found' });
//   res.json(user);
// });

// module.exports = router;









//task13
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('List of all users');
});

router.get('/:id', (req, res) => {
  res.send(`User details for ID: ${req.params.id}`);
});

module.exports = router;
