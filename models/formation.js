var formation=function writeNewFormation(intitule, description, dateFormation, lieuFormation) {
    
  

  // A post entry.
  var formationItem = {
    intitule: intitule,
    description: description,
    dateFormation: dateFormation,
    lieuFormation: lieuFormation,
  };



  let config = require('../config/firebase');
  let firebase = require('firebase');
  
try {
 firebase.initializeApp(config);
}
catch (err) {
if (!/already exists/.test(err.message)) {
console.error('Firebase initialization error raised', err.stack)
}}
const firebaseApp= firebase;


  // Get a key for a new Post.
  var newformKey = firebase.database().ref().child('formations').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/formations/' + newformKey] = formationItem;

  return firebaseApp.database().ref().update(updates);
}

module.exports=formation