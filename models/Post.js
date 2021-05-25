const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  text: {
    required: true,
    type: String,
  },
  public: {
    type: Boolean,
    default: true
  },
  user: {
    type: mongoose.ObjectId,
    ref: 'User'
  },
  createdAt: {
    default: Date.now,
    type: Date
  }
})

module.exports = mongoose.model('Post', PostSchema);