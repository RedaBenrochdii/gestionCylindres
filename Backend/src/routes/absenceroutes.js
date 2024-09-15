const express = require('express');
const router = express.Router();
const AbsenceController = require('../controllers/absenceController');

router.post('/', AbsenceController.createAbsence);
router.get('/', AbsenceController.getAllAbsences);
router.get('/:id', AbsenceController.getAbsenceById);
router.put('/:id', AbsenceController.updateAbsence);
router.delete('/:id', AbsenceController.deleteAbsence);

module.exports = router;
