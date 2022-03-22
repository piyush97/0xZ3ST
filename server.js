const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;
/**
 * @description: This is the main server file.
 * @param: none
 * @return: none
 *
 */
app.get("/", function (req, res) {
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

app.listen(port);
console.log("Server started at http://localhost:" + port);
