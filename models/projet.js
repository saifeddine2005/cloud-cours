

//Q3
const mongoose = require('mongoose');

const ProjetSchema = new mongoose.Schema({
  ID_projet: Number,
  Nom: String,
  Description: String
});

module.exports = mongoose.model('Projet', ProjetSchema);
