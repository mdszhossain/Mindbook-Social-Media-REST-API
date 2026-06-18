const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("request working");
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
