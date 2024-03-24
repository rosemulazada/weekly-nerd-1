// Core modules
const path = require("path");

// NPM modules
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

// Setup handlebars engine and views location
app.set("view engine", "ejs");
app.set("views", viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

/**========================================================================
 *                           CODE START
 *========================================================================**/

app.get("", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;

console.log(process.env);