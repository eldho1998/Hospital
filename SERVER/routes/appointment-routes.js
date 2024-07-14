const express = require('express');
const router = express.Router();
const controllers = require('../controllers/appointment-controllers');

router.get('/', controllers.getAppointment);
router.get('/:id', controllers.getAppointmentById);
router.post('/', controllers.postAppointment);
router.patch('/', controllers.patchAppointmentById);
router.delete('/', controllers.deleteAppointment);
router.delete('/:id', controllers.deleteAppointmentByID);

module.exports = router;
