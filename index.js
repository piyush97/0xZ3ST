import express from "express";

/** @type {Express}
 *  @description The express application.
 *  @see {@link https://expressjs.com/en/4x/api.html#express}
 *
 */
const app = express();

/** @type {number}
 * @description port number
 * @default 3000
 */
const PORT = process.env.PORT || 3000;

// view engine to ejs
app.set("view engine", "ejs");

// Initial routing
app.get("/", function (req, res) {
  res.render("pages/index", {
    name: "0xZ3ST",
    version: "0.0.1",
    description: `The Treasure hunt with Metaverse flavour.`,
  });
});

app.listen(PORT, function () {
  console.log("Server started on port " + PORT + " 🚀");
});
