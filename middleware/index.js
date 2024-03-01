const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    async verifyEmail(req, res, next) {
        const { email } = req.body;

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

        if (user) {
            return res.json({ status: "Email ja cadastrado" });
        }

        return next();
    }
}