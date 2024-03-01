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

    async read(req, res) {
        const { email } = req.params;

        const user = await prisma.user.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                email: true,
                name: true,
            }
        });

        res.json(user);
    },

    update(req, res) {
        res.json({ method: "update" });
    },

    async excluir(req, res) {
        const { email } = req.params;

        const user = await prisma.user.delete({
            where: {
                email
            },
        });

        res.json(user);
    }
}