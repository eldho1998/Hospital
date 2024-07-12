const express = require('express');
const router = express.Router();
const controllers = require('../controllers/doctor-controllers');
const upload = require('../middlewares/uploads');

router.get('/', controllers.getDoctors);
router.get('/id', controllers.getDoctorById);
router.post('/', upload.single('image'), controllers.postDoctors);
router.patch('/id', controllers.patchDoctorById);
router.delete('/', controllers.deleteDoctors);
router.delete('/id', controllers.deleteDoctorByID);

module.exports = router;
