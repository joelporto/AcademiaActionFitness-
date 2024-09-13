const express = require('express')
const router = express.Router()
const controller = require('../controller/index')

router.post("/", (req,res) =>{controller.criarPlano(req,res)})

module.exports = router