//const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 5000; // Définition du port
// Import des routes clients
const clientRoutes = require('./src/routes/clientroutes');

// Utiliser les routes
app.use('/api', clientRoutes);

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Route de test pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
  res.send('Le serveur fonctionne sur le port 5000!');
});
//app.use('/api', require('./src/routes/clientRoutes'));

// Utiliser les routes clients
//app.use('/clients', clientRoutes);
// Démarrer le serveur sur le port 5000
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
// index.js
// Connexion à MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gestionCrud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connecté à MongoDB'))
.catch((err) => console.error('Erreur de connexion à MongoDB', err));
