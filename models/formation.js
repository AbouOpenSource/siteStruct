

class Formation{
      constructor(intitule, description, dateFormation, lieuFormation)
      {
        this.intitule=intitule;
        this.description=description;
        this.dateFormation=dateFormation;
        this.lieuFormation=lieuFormation;
      }


      static writeNewFormation(item) {
                      let config = require('../config/firebase');
                      let firebase = require('firebase');
  
                      try {
                            firebase.initializeApp(config);
                          }
                      catch (err) {
                            if (!/already exists/.test(err.message)) 
                            {
                            console.error('Firebase initialization error raised', err.stack)
                            }
                                  }
                      const firebaseApp= firebase;


                      // Get a key for a new Post.
                      var newformKey = firebaseApp.database().ref().child('formations').push().key;
                      // Write the new post's data simultaneously in the posts list and the user's post list.
                      var updates = {};
                      updates['/formations/' + newformKey] = item;

                      return firebaseApp.database().ref().update(updates);
                    }









    static all()
    {
                  let config = require('../config/firebase');
                      let firebase = require('firebase');
  
                  try {
                        firebase.initializeApp(config);
                        }
                  catch (err) {
                      if (!/already exists/.test(err.message)) 
                        {
                          console.error('Firebase initialization error raised', err.stack)
                        }
                              }
                 const firebaseApp= firebase;
                // var test= firebaseApp.database().ref('formations')
                 var data= firebaseApp.database().ref('formations')

                    data.once("value", function(snapshot) {
                      var value = snapshot.val();   //Data is in JSON format.
                          console.log(value);
                      });
                  return data;
    }


























}

module.exports=Formation
