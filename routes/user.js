const express = require("express");
const router = express.Router();


const userController = require("../controller/userController");
const auth = require("../middleware/authMiddleware");

router.post("/addUser", userController.addUser);
router.get("/getUserData", auth, userController.getUser);



module.exports = router;
