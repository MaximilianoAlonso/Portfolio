const express = require('express');
const router = express.Router();
const {index,saveComments,viewComment} = require("../controllers/indexController")

/* GET home page. */
router.get('/', index)
        .post('/', saveComments)
        .get("/comments", viewComment)


module.exports = router;
