const express = require('express');
const router = express.Router();
const Controller = require("../controller/index");

router.get("/", (req, res) =>{Controller.getMatriculas(req, res)});

router.post("/", (req,res) =>{Controller.createMatricula(req, res) });

module.exports = router
