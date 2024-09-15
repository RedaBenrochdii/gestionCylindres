const mongoose = require('mongoose');

const employeSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  poste: {
    type: String,
    required: true,
  },
  dateEmbauche: {
    type: Date,
    default: Date.now,
  },
  absences: [{
    date: Date,
    motif: String,
  }]
});

module.exports = mongoose.model('Employe', employeSchema);
