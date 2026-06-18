const express = require("express");
const app = express();
const port = 8080;
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
