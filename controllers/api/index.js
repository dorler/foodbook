const router = require('express').Router();

//const apiRoutes = require('./api');
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);

module.exports = router;