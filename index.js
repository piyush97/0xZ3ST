import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;
// view engine to ejs
app.set("view engine", "ejs");

// index page
app.get("/", function (req, res) {
  // using response => render to load up an ejs view file
  res.render("pages/index");
});

app.listen(PORT, function () {
  console.log("Server started on port " + PORT);
});
