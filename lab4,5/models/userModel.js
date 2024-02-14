const mongoose =require('mongoose')
const bcrypt =require('bcrypt')
const { Schema } = mongoose;

 

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 8,
  },
  firstname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
  },
  
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  dob: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }},
  
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.password = undefined;//remove password before transform it to another model 
        return ret;
      },
    },
  }
);
 
 

const User = mongoose.model('User', userSchema);
module.exports = User;



