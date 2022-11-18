const express = require('express');
const router = express.Router();
const Controller = require("../controller/index");

router.post("/" , (req,res)=>{Controller.criarIndicado(req,res)})

module.exports = router