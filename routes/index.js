const express = require('express');
const router = express.Router();
const {index,saveComments,viewComment, deleteComment} = require("../controllers/indexController")

/* GET home page. */
router.get('/', index)
        .post('/', saveComments)
        .get("/comments", viewComment)
        .post("/deleteComment/:id", deleteComment)

module.exports = router;
