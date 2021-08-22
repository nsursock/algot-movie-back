const express = require("express");
const urlRoutes = express.Router();

const controller = require("../controllers/movie.controller");

urlRoutes.post("/", controller.createRequest);
urlRoutes.get("/", controller.readRequest);
urlRoutes.delete("/", controller.deleteRequest);

module.exports = urlRoutes;
