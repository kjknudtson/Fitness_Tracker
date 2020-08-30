const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });



app.listen(8080, () => {
  console.log("App running on port 8080!");
});
