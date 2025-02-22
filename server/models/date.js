const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DateSchema = new Schema({
  userID: Number,
  date: Date,
  mealsArray: [{ type: Schema.Types.ObjectId, ref: "meal" }],

})

module.exports = mongoose.model("Date", DateSchema);