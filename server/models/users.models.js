var mongoose = require('mongoose');

const Schema = mongoose.Schema;
//creat a Schema for the users
const userSchema = new Schema({
  username: {type: String, required: true, unique: true}
}
);
//creat a model
const User = mongoose.model('User', userSchema);
//do not fprget to export
module.exports = User;