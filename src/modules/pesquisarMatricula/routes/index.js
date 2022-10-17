const express = require('express');
const router = express.Router();
const Controller = require("../controller/index");

router.get("/", (req, res) =>{Controller.getAluno(req, res)});

router.post("/", (req,res) =>{Controller.createAluno(req, res)});

module.exports = router
