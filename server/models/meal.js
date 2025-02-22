const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  userId: Number,
  mealId: Number,
  mealType: String,
  mealItems: [{ type: Schema.Types.ObjectId, ref: "foodItem" }],
  // calories: Number,
  // carbohydrates: Number,
  // protein: Number,
  // fat: Number,
  // carbMacro: Number,
  // proteinMacro: Number,
  // fatMacro: Number,
});

module.exports = mongoose.model("Meal", MealSchema);