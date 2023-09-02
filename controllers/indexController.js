const fs = require("fs")
const path = require("path")
const commentForn = require("../data/comment.json")

const escribirJSON = (item) => {fs.writeFileSync(path.join(__dirname, "../data/comment.json"),JSON.stringify(item, null, 2),"utf-8")};
module.exports = {
    index: (req,res) => {
        res.render("index")
    },
    saveFormContact: (req,res) => {
   
        const {name, comment, phone , email} = req.body;
     const newComment ={
            name: name,
            phone:phone,
            email:email,
            comment: comment
        }
        commentForn.push(newComment)
        escribirJSON(commentForn)
        res.redirect("/")
    }
}