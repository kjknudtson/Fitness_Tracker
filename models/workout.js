const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now()
    },
    exercises: [
        {
          type: {
            type: String
          },
          name: {
            type: String
          },
          duration: {
            type: Number
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
    ]
},
{
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true 
  }
});

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce(function(acc, currentValue){
     return acc + currentValue.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;