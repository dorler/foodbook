const router = require('express').Router();

//const apiRoutes = require('./api');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/user', userRoutes);

module.exports = router;