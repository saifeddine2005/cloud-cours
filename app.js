// // Q1




// //Q2

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());


// mongoose.connect('mongodb://localhost:27017/Base_N1', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connecté'))
//   .catch(err => console.log(err));


// app.listen(5000, () => {
//   console.log('Serveur démarré ');
// });


// //Q4
// const Projet = require('./models/projet');



// //Q5 Afficher tous les document
// app.get('/projets', async (req, res) => {
//     const projets = await Projet.find();
//     res.json(projets);
//   });



//   // Q6 Ajouter un document
//   app.post('/projets', async (req, res) => {
//     try {
//       const nouveauProjet = new Projet(req.body);
//       await nouveauProjet.save();
//       res.json({ message: 'Projet ajouté', projet: nouveauProjet });
//     } catch (error) {
//       res.status(500).json({ message: 'Erreur lors de l\'ajout', error: error.message });
//     }
//   })


// // Q7  Modifier un document
// app.put('/projets/:id', async (req, res) => {
//     const projetModifie = await Projet.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json({ message: 'Projet modifié', projet: projetModifie });
//   });
//   /// Q8 Supprimer un document
//   app.delete('/projets/:id', async (req, res) => {
//     await Projet.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Projet supprimé' });
//   });
  
//   // Q9 Afficher un document par Id
//   app.get('/projets/id/:id', async (req, res) => {
//     const projet = await Projet.findById(req.params.id);
//     res.json(projet);
//   });
  
//   // Q10 Afficher un ou plusieurs documents par Nom
//   app.get('/projets/nom/:nom', async (req, res) => {
//     const projets = await Projet.find({ Nom: req.params.nom });
//     res.json(projets);
//   });
  
//   // Q11 Afficher selon query string 

//   app.get('/projets/search', async (req, res) => {
//     const query = {};
//     if(req.query.Nom) query.Nom = req.query.Nom;
//     if(req.query.Description) query.Description = req.query.Description;
  
//     const projets = await Projet.find(query);
//     res.json(projets);
//   });
  



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Base_N1', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.log(err));

const Projet = require('./models/projet');

app.get('/projets', async (req, res) => {
  const projets = await Projet.find();
  res.json(projets);
});

app.post('/projets', async (req, res) => {
  try {
    const nouveauProjet = new Projet(req.body);
    await nouveauProjet.save();
    res.json({ message: 'Projet ajouté', projet: nouveauProjet });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout', error: error.message });
  }
});

app.put('/projets/:id', async (req, res) => {
  try {
    const projetModifie = await Projet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    if (!projetModifie) return res.status(404).json({ message: 'Projet non trouvé' });

    res.json({ message: 'Projet modifié', projet: projetModifie });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la modification', error: error.message });
  }
});

app.delete('/projets/:id', async (req, res) => {
  try {
    const projetSupprime = await Projet.findByIdAndDelete(req.params.id);
    if (!projetSupprime) return res.status(404).json({ message: 'Projet non trouvé' });
    res.json({ message: 'Projet supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression', error: error.message });
  }
});

app.get('/projets/id/:id', async (req, res) => {
  try {
    const projet = await Projet.findById(req.params.id);
    if (!projet) return res.status(404).json({ message: 'Projet non trouvé' });
    res.json(projet);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la recherche', error: error.message });
  }
});

app.get('/projets/nom/:nom', async (req, res) => {
  const projets = await Projet.find({ Nom: req.params.nom });
  res.json(projets);
});

app.get('/projets/search', async (req, res) => {
  const query = {};
  if (req.query.Nom) query.Nom = req.query.Nom;
  if (req.query.Description) query.Description = req.query.Description;

  const projets = await Projet.find(query);
  res.json(projets);
});

app.listen(3000, () => {
  console.log('Serveur démarré ');
});
