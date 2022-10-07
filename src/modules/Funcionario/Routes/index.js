const express = require('express');
const router = express.Router();
const Controller = require("../controller/index");

router.get("/", (req, res) =>{Controller.getFuncinario(req, res)});

router.post("/", (req,res) =>{Controller.createFuncionario(req, res)});

module.exports = router