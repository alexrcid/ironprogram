const mongoose = require("mongoose");
const Schema   = mongoose.Schema;



const routineSchema = new Schema({
  week: [Number],
  day: [String],
  title: String,
  duration: String,
  description: String,
  videosTips: String
});

const Routine = mongoose.model("routine", routineSchema);
module.exports = Routine;



/*
exercises: [{
  value:
  title: String,
  duration: Number,
  repetitions: Number,
  description: String,
  tips: String,
  videosTips: [String]
}]
*/
