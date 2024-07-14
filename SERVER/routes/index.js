const express = require('express');
const router = express.Router();
const departmentRoutes = require('./department-routes');
const hospitalRoutes = require('./hospital-routes');
const doctorRoutes = require('./doctor-routes');
const slotRoutes = require('./slot-routes');
const appointmentRoutes = require('./appointment-routes');

router.use('/department', departmentRoutes);
router.use('/hospital', hospitalRoutes);
router.use('/doctor', doctorRoutes);
router.use('/slots', slotRoutes);
router.use('/appointment', appointmentRoutes);

module.exports = router;
