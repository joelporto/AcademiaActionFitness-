const express = require("express")
const router = express.Router()
const Controller = require('../controller/index')

router.put("/" , (req, res) =>{Controller.alterarMatricula(req,res)});

module.exports = router