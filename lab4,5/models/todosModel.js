const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
     
  },
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },
  status: {
    type: String,
    enum: ['to-do', 'in progress', 'done'],
    default: 'to-do',
  },
  tags: [{
    type: String,
    maxlength: 10,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
},{ timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;