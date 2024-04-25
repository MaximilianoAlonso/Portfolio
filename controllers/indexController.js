const db = require("../database/models");

module.exports = {
    index: (req, res) => {
        try {
            res.render("index");
        } catch (error) {
            console.error("Error en la función index:", error);
            res.status(500).send("Error interno del servidor");
        }
    },
    saveComments: async (req, res) => {
        try {
            const { name, phone, email, comment } = req.body;
            await db.Comments.create({
                name: name,
                phone: phone,
                email: email,
                comment: comment
            });
            res.redirect("/");
        } catch (error) {
            console.error("Error al guardar comentarios:", error);
            res.status(500).send("Error interno del servidor");
        }
    },
    viewComment: async (req, res) => {
        try {
            const allComments = await db.Comments.findAll();
            res.render("comments", {
                comments: allComments
            });
        } catch (error) {
            console.error("Error al ver comentarios:", error);
            res.status(500).send("Error interno del servidor");
        }
    }
};
