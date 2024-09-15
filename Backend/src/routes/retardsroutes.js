const express = require('express');
const router = express.Router();
const RetardController = require('../controllers/retardController');

router.post('/', RetardController.createRetard);
router.get('/', RetardController.getAllRetards);
router.get('/:id', RetardController.getRetardById);
router.put('/:id', RetardController.updateRetard);
router.delete('/:id', RetardController.deleteRetard);

module.exports = router;
