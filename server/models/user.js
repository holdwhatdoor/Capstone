const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: Number,
  username: String,
  password: String,
  // loggedInStatus: Boolean,
})

module.exports = mongoose.model("User", UserSchema);