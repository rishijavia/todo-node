// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MondoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate(
    {
      _id: new ObjectID('586e949a49d22d1f477fc98d')
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  });

  // db.close();
});
