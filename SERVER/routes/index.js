const express = require('express');
const router = express.Router();
const departmentRoutes = require('./department-routes');

router.use('/department', departmentRoutes);

module.exports = router;
