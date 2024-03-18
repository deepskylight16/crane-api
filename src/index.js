const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Crane API!");
});

app.get("/nuclear-launch-code", (req, res) => {
  if (req.headers.authorization !== process.env.API_KEY) {
    res.status(401).send("Unauthorised!");
  }

  res.send(`The nuclear launch code is: ${process.env.LAUNCH_CODE}`);
});
