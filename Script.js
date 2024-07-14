const express = require("express");
const app = express();

//middleware
app.use(function (req, res, next) {
  console.log("hello midware kaise ho");
  next();
});

// concept of routing
app.get("/", function (req, res) {
  res.send("Arpit kumar bharti");
});

app.get("/profile/:username", function (req, res) {
  res.send(`Hello harsh ${req.params.username}`);
});
app.get("/profile/:username", function (req, res) {
  res.send(`Hello harshit ${req.params.username}`);
});
app.get("/profile/:username", function (req, res) {
  res.send(`Hello gurpit ${req.params.username}`);
});

app.listen(3000);
