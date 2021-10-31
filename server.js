"use strict";

const express = require("express");
const app = express(); // intiate express

require("dotenv").config();

const PORT = process.env.PORT;

const stamper = require("./middleware/stamper");
const wrongPathHandler = require("./handlers/404");
const serverErrorHandler = require("./handlers/500");

// checking the server workability
app.get("/", (req, res) => {
  res.status(200).send("Server is working");
});

// Data route
app.get("/data", stamper, (req, res) => {
  const myData = {
    name: "wesam",
    age: 23,
    major: "Civil Engineer & Full Stack Developer",
    time: req.timestamp,
  };

  res.status(200).json(myData);
});

// Error route
app.get("/error", (req, res) => {
  throw new Error("You made an Error 🛑❗");
});

// Middle Wares
app.use("*", wrongPathHandler);
app.use(serverErrorHandler);

// starting the server function
const start = () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

module.exports = { start, app };
