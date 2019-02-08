var event=function writeNewEvent(intitule, description, dateEvent, lieuEvent) {
  // A post entry.
  var eventItem = {
    intitule: intitule,
    description: description,
    dateEvent: dateEvent,
    lieuEvent: lieuEvent,
  };
  let config = require('../config/firebase')
  let firebase = require('firebase')
  firebase.initializeApp(config);

  // Get a key for a new Post.
  var newEvenKey = firebase.database().ref().child('formations').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/formations/' + newEvenKey] = eventItem;

  return firebase.database().ref().update(updates);
}

module.exports=event