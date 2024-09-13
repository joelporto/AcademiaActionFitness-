const express = require('express')
const Controller = require('../controller/index')
const router = express.Router()

router.put("/" , (req,res) => {Controller.criarPagamento(req,res)})

module.exports = router