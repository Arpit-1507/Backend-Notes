const { error } = require("console");
const express = require("express");
const app = express();

app.use(express.static("./public"));

app.set("view engine", "ejs");

app.get("/error", function (req, res, next) {
  throw Error("Something went to wrong");
});

app.get("/", function (req, res) {
  res.render("index", { name: "join to arpit" });
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000);
