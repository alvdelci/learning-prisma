const { Router } = require("express");
const routes = Router();
const { create, read, update, excluir } = require("../controllers");


routes.get("/", (req, res) => res.send("Servidor Online"))
routes.post("/dev", create);
routes.get("/dev", read);
routes.put("/dev", update);
routes.delete("/dev", excluir);

module.exports = routes;