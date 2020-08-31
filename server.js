const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



// const db = require("./models");

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

require("./routes/api-routes");
require("./routes/html-routes");

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
