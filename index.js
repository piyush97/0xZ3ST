import express from "express";

/** @type {name: String, version: String, description: String}
 * @description This is the application data.
 * @author Piyush97
 * @version 0.0.1
 */
const AppData = {
  name: "0xZ3ST",
  version: "0.0.1",
  description: `The Treasure hunt with Metaverse flavour.`,
};
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

/**
 * @description VIEW ENGINE SETUP WITH EJS
 * @see {@link https://ejs.co/}
 * @see {@link https://expressjs.com/en/4x/api.html#express.static}
 */
app.set("view engine", "ejs");

/**
 * @description The main route of the application.
 * @see {@link https://expressjs.com/en/4x/api.html#app.get}
 */
app.get("/", function (req, res) {
  res.render("pages/index", AppData);
});

/**
 * @description The onboarding route of the application.
 */
app.get("/signup", function (req, res) {
  res.render("pages/signup", AppData);
});

/**
 * @description The sign in route of the application.
 */
app.get("/signin", function (req, res) {
  res.render("pages/signin", AppData);
});

/**
 * @description The game route of the application.
 */
app.get("/play", function (req, res) {
  res.render("pages/play");
});

/**
 * @description Port listening on the specified port.
 * @see {@link https://expressjs.com/en/4x/api.html#app.listen}
 */
app.listen(PORT, function () {
  console.log("Server started on port " + PORT + " 🚀");
});
