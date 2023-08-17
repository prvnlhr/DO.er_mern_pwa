const express = require("express");
const router = express.Router();

const courseController = require("../controller/courseController");
const auth = require("../middleware/authMiddleware")

router.post("/markProgress", courseController.updateCourseProgress);
router.post("/updateDailyTimeSpent", courseController.updateDailyTimeSpent);
router.post("/addBookmark", auth, courseController.addBookmark);
router.get("/getCourseData/", auth, courseController.getCourseData);
router.post('/addLastOpenedTopic', auth, courseController.addLastOpenedTopic);

module.exports = router;
