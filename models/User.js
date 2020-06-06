const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  initial: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
  registeredDate: {
    type: Date,
  },
});
module.exports = User = mongoose.model("user", UserSchema);
