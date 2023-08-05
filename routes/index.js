const express = require("express");
const router = express.Router();

router.use("/api/auth", require("./auth"));
router.use("/api/course/", require("./course"));
router.use("/api/user/", require("./user"));


module.exports = router;
