const { Router } = require("express");
const routes = Router();
const { create, read, update, excluir } = require("../controllers");
const { verifyEmail } = require("../middleware");


routes.get("/", (req, res) => res.send("Servidor Online"))
routes.post("/dev", verifyEmail, create);
routes.get("/dev", read);
routes.put("/dev", update);
routes.delete("/dev/:email", excluir);

module.exports = routes;