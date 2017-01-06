const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '586fcc548af9cf9164a0da081';
//
// if(!ObjectID.isValid(id)){
//   return console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

var id = '586f3bcc790b4de43e2d4ba1';

User.findById(id).then((user) => {
  if (!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
