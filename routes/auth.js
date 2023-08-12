const express = require("express");
const router = express.Router();


const authController = require("../controller/authController");

router.post("/userSignIn", authController.signInUser);
router.post("/userSignUp", authController.signUpUser);
router.post("/verifyOtp", authController.verifyOtp);
router.post("/resendOtp", authController.resendOtp);
router.post("/checkUserAuth", authController.checkAuth);
router.get("/logout", authController.logout);

module.exports = router;
