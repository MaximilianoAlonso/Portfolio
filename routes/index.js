const express = require('express');
const router = express.Router();
const {index, saveFormContact} = require("../controllers/indexController")

/* GET home page. */
router.get('/', index)
      .post("/", saveFormContact)


module.exports = router;
