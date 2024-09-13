const express = require('express');
const router = express.Router();
const Controller = require("../controller/index")

router.post("/", (req,res) =>{Controller.cadastarFornecedor(req, res)});

module.exports = router