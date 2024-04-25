const fs = require("fs")
const path = require("path")

const db = require("../database/models")


module.exports = {
    index: (req,res) => {
        res.render("index")
    },
    saveComments: async (req,res) => {
        try {
        const {name,phone,email,comment} =  req.body;
        await db.Comments.create({
            name:name,
            phone: phone,
            email:email,
            comment:comment
        })

        res.redirect("/")

        } catch (error) {
            console.log(error)
        }        
    },
    viewComment: async (req,res) =>{

        try {
            const allComments = await db.Comments.findAll()

            res.render("comments", {
                comments: allComments
            })
            


         } catch (error) {
            console.log(error);
        }
    }
}
