const Workout = require("../models/workout")

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find()
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          })
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(
            req.params.id,
            { $push: {exercises: req.body} },
            { new: true }
        )
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
        });

    app.post("/api/workouts", function (req, res) {
        Workout.create()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("/api/workouts/range", function (req, res) {
        Workout.find()
            .then(dbWorkout => {
            res.json(dbWorkout);
            })
            .catch(err => {
            res.status(400).json(err);
            });
    });

    app.post("/api/workouts/range", function (req, res) {
        Workout.create()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    
}
