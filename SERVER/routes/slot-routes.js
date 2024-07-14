const express = require('express');
const router = express.Router();
const controllers = require('../controllers/slot-controllers');

router.get('/', controllers.getSlots);
router.get('/:id', controllers.getSlotsById);
router.post('/', controllers.postSlots);
router.patch('/', controllers.patchSlotsById);
router.delete('/', controllers.deleteSlots);
router.delete('/:id', controllers.deleteSlotsByID);

module.exports = router;
