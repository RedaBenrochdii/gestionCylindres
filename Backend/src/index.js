const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 5000;

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/gestionCrud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connecté à MongoDB avec succès'))
.catch((err) => console.error('Erreur de connexion à MongoDB', err));

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
