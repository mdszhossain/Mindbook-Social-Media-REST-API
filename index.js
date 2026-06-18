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

// default posts array
let posts = [
    {userId: uuidv4(), username: "shazzadhsn", content: "Hello! I am Shazzad. I love coding"},
    {userId: uuidv4(), username: "rifatsani", content: "Hello! I am Rifat. I got admission in UK"},
    {userId: uuidv4(), username: "shanjidaakter", content: "Hello! I am Shanjida. I love eating"},
];

// index route rendering
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
});
