const express = require("express")
const router = express.Router()
const Controller = require("../controller/index")

router.get("/" , (req,res) =>{Controller.logarNoFront(req, res)})

router.post("/" , (req,res) =>{Controller.validarLoginNoBD(req, res)})

module.exports = router