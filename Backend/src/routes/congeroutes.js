const express = require('express');
const router = express.Router();
const CongeController = require('../controllers/congeController');

router.post('/', CongeController.createConge);
router.get('/', CongeController.getAllConges);
router.get('/:id', CongeController.getCongeById);
router.put('/:id', CongeController.updateConge);
router.delete('/:id', CongeController.deleteConge);

module.exports = router;
