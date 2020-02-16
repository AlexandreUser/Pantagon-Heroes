const express = require("express");
const routes = express.Router();
const cardController = require("./api/controller/cards.controller");

routes.post("/api/v1/cards", cardController.create);
routes.get("/api/v1/cards", cardController.find);
routes.get("/api/v1/cards/:id", cardController.findById);
routes.put("/api/v1/cards", cardController.update);
routes.delete("/api/v1/cards/:id", cardController.delete);

module.exports = routes;
