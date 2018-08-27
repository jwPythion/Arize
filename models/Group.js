const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
      type: String,
      required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

module.exports = mongoose.model('Group', GroupSchema);