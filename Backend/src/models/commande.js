const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  produit: {
    type: String,
    required: true,
  },
  quantite: {
    type: Number,
    required: true,
  },
  statut: {
    type: String,
    enum: ['En attente', 'En cours', 'Terminée', 'Annulée'],
    default: 'En attente'
  },
  dateCommande: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Commande', commandeSchema);
