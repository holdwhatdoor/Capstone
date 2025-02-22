const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
  foodId: Number,
  brand: String,
  foodName: String,
  calories: Number,
  carbohydrates: Number,
  protein: Number,
  fat: Number,
  portionType: String,
  amt: Number,
});

module.exports = mongoose.model("FoodItem", FoodItemSchema);