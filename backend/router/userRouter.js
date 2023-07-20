const express = require("express");
const createData = require("../controller/userController");
const router = express.Router();


router.post('/users', createData)

module.exports =  router