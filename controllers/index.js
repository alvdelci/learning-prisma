const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    async create(req, res) {

        const { name, email } = req.body;

        try {
            const user = await prisma.user.create({
                data: {
                    email,
                    name,
                },
            });

            res.status(201).json(user);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },

    read(req, res) {
        res.json({ method: "read" });
    },

    update(req, res) {
        res.json({ method: "update" });
    },

    excluir(req, res) {
        res.json({ method: "delete" });
    }
}