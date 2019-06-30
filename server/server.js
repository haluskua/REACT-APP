const express = require("express");
const server = express();
const animalRoutes = require("./routes/animals");
const path = require("path");
server.use(express.static("public"));
server.use(express.json());

server.use("/api/v1/animals", animalRoutes);
server.get("*", (req, res) => {
  res.sendFile(__dirname + "/public" + "/index.html");
});
module.exports = server;
