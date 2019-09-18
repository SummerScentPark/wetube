// const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log("Listening on: httpL//localhost:`${PORT}");

const handleHome = (req, res) => res.send("Hello from ass");

const handleProfile = (req, res) => res.send("Profile");

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
