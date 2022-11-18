const express = require('express')
const router = express.Router()
const controller = require('../controller/index')

router.get("/", (req,res) =>{controller.plano(req,res)})

router.post("/", (req,res) =>{controller.criarDado(req,res)})

module.exports = router