const controller = require("../controller/index")
const express = require("express")
const router = express.Router()

router.put("/", (req,res) =>{controller.alterarPlano(req,res)})

module.exports = router