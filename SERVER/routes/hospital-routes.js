const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploads');
const controller = require('../controllers/hospital-controllers');

router.get('/', controller.getHospitals);
router.get('/id', controller.getHospitalsById);
router.post('/', upload.single('image'), controller.postHospitals);
router.patch('/id', controller.patchHospitalsById);
router.delete('/', controller.deleteHospitals);
router.delete('/id', controller.deleteHospitalsByID);

module.exports = router;
