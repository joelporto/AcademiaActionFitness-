const express = require("express")
const router = express.Router()
const Controller = require("../controller/index")

router.get("/" , (req,res) =>{Controller.getLogin(req, res)})

router.post("/" , (req, res) =>{Controller.createLogin(req, res)})

module.exports = router