const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "splash_screen.html"));
});

app.get("/signin", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "/register.html"));
});

app.get("/game", function (req, res) {
  res.sendFile(path.join(__dirname, "/game.html"));
});
app.get("/1", function (req, res) {
  res.sendFile(path.join(__dirname, "/level1.html"));
});
app.get("/2", function (req, res) {
  res.sendFile(path.join(__dirname, "/level2.html"));
});
app.get("/3", function (req, res) {
  res.sendFile(path.join(__dirname, "/level3.html"));
});
app.get("/4", function (req, res) {
  res.sendFile(path.join(__dirname, "/level4.html"));
});
app.get("/5", function (req, res) {
  res.sendFile(path.join(__dirname, "/level5.html"));
});
app.get("/6", function (req, res) {
  res.sendFile(path.join(__dirname, "/level6.html"));
});
app.get("/7", function (req, res) {
  res.sendFile(path.join(__dirname, "/level7.html"));
});
app.get("/8", function (req, res) {
  res.sendFile(path.join(__dirname, "/level8.html"));
});
app.get("/9", function (req, res) {
  res.sendFile(path.join(__dirname, "/level9.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
