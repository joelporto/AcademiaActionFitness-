const express = require('express')
const router = express.Router()
const controller = require('../controller/index')

router.get("/", (req,res) =>{controller.plano(req,res)})


module.exports = router