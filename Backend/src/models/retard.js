const mongoose = require('mongoose');

const retardSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['validated', 'pending'], default: 'pending' }
});

module.exports = mongoose.model('Retard', retardSchema);
