const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: 'asdas'})

Todo.findByIdAndRemove('58707cae49d22d1f477fcfa7').then((todo) => {
  console.log(todo);
});
