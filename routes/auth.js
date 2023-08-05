const express = require("express");
const router = express.Router();


const authController = require("../controller/authController");

router.get("/verifyAuth", authController.verifyAuth);



module.exports = router;
