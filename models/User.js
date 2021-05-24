const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    required: true,
    type: 'string'
  },
  password: {
    type: 'string',
    required: true
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;