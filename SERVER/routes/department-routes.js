const express = require('express');
const controller = require('../controllers/department-controllers');
const upload = require('../middlewares/uploads');

const router = express.Router();

router.get('/', controller.getDepartments);
router.get('/:id', controller.getDepartmentsById);
router.post('/', upload.single('image'), controller.postDepartments);
router.patch('/', controller.patchDepartments);
router.delete('/', controller.deleteDepartments);
router.delete('/:id', controller.deleteDepartmentsByID);

module.exports = router;
