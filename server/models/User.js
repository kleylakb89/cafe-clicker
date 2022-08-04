const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//this is our userSchema, the objects associated with it and their data types
const userSchema = new Schema ({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});
//verrifying a new user password and saving that user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});
//verifying if the password the user put in is the correct password for that user
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
//setting our userSchema to a model and setting that model to a constant
const User = model('User', userSchema);
//exporting our user model
module.exports = User;