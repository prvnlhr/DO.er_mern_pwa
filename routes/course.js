const express = require("express");
const router = express.Router();

const courseController = require("../controller/courseController");

router.post("/markProgress", courseController.updateCourseProgress);
router.get("/getCourseData/:userId", courseController.getCourseData);
router.post("/updateTimeSpent", courseController.updateCourseProgress);
router.post("/addBookmark", courseController.addBookmark);


module.exports = router;
