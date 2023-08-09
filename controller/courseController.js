const { User } = require("../model/userData")


const courseController = {

    updateCourseProgress: async (req, res) => {
        try {
            const { user_id, courseIndex, chapterIndex, topicIndex, numCourses, numChaptersInCourse, numTopicsInChapter } = req.body;

            const userId = user_id;

            const user = await User.findById(userId);


            // Initialize completedCourses, completedChapters, and completedTopics if they are undefined
            user.currentCourseState.completedCourses = user.currentCourseState.completedCourses || {};
            user.currentCourseState.completedChapters[courseIndex] = user.currentCourseState.completedChapters[courseIndex] || {};
            user.currentCourseState.completedTopics[courseIndex] = user.currentCourseState.completedTopics[courseIndex] || {};
            user.currentCourseState.completedTopics[courseIndex][chapterIndex] = user.currentCourseState.completedTopics[courseIndex][chapterIndex] || {};

            // Mark the topic as completed
            user.currentCourseState.completedTopics[courseIndex][chapterIndex][topicIndex] = true;

            // Check if all topics in the chapter are completed and mark the chapter as completed if necessary
            const completedTopicsInChapter = Object.values(user.currentCourseState.completedTopics[courseIndex][chapterIndex]).filter((completed) => completed).length;
            const isChapterCompleted = numTopicsInChapter === completedTopicsInChapter;
            user.currentCourseState.completedChapters[courseIndex][chapterIndex] = isChapterCompleted;

            // Check if all chapters in the course are completed and mark the course as completed if necessary
            const completedChaptersInCourse = Object.values(user.currentCourseState.completedChapters[courseIndex]).filter((completed) => completed).length;

            const isCourseCompleted = numChaptersInCourse === completedChaptersInCourse;
            user.currentCourseState.completedCourses[courseIndex] = isCourseCompleted;

            await user.save();

            // Respond with success
            return res.status(200).json({
                success: true,
                currentCourseState: user.currentCourseState,
            });
        } catch (error) {
            console.log("error at updateCourseProgress controller", error);
            res.status(500).json({
                errorMsg: 'Error at updateCourseProgress controller',
                actualError: error.message,
            });
        }
    },

    getCourseData: async (req, res) => {
        try {
            console.log('getCourseData controller', req.user.userId);
            const user = await User.findById(req.user.userId);
            if (!user) {
                return res.status(500).json({ errorMsg: 'Didnt find user' });
            } else {
                return res.status(201).json({ courseData: user });
            }
        } catch (error) {
            console.error("Error in getCourseData controller:", error);
            res.status(500).json({
                errorMsg: 'Error at getCourseData',
                actualError: error.message,
            });
        }
    },

    updateDailyTimeSpent: async (req, res) => {
        try {
            const { userId, currentDayOfWeek, currentTimeSpent } = req.body;
            console.log('update time', userId, currentDayOfWeek, currentTimeSpent)
            const user = await User.findById(userId);
            if (!user) {
                return res.status(500).json('Didnt find user');
            }
            user.dailyTimeSpent[currentDayOfWeek] += currentTimeSpent;
            await user.save();
            return res.status(201).json(user.dailyTimeSpent);
        } catch (error) {
            res.status(500).json({
                errorMsg: 'Error at updatedailyTimeSpent controller',
                actualError: error.message,
            });
        }
    },

    addBookmark: async (req, res) => {
        try {
            const { courseIndx, chapterIndx } = req.body;

            console.log(req.user.userId);

            // Find the user by user_id
            const user = await User.findById(req.user.userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const { currentCourseState } = user;
            const { bookmarkedChapters } = currentCourseState;

            // Initialize the bookmarks array for the course if it doesn't exist
            if (!bookmarkedChapters[courseIndx]) {
                bookmarkedChapters[courseIndx] = [];
            }

            // Check if the chapter is already bookmarked
            console.log('before', bookmarkedChapters);
            if (bookmarkedChapters[courseIndx].includes(chapterIndx)) {
                // Chapter is already bookmarked, unbookmark it and send success response
                bookmarkedChapters[courseIndx] = bookmarkedChapters[courseIndx].filter(idx => idx !== chapterIndx);
            } else {
                // Add the chapterIndex to the bookmarks array for the course
                bookmarkedChapters[courseIndx].push(chapterIndx);
            }

            // Update the user's currentCourseState with the modified bookmarkedChapters
            user.currentCourseState.bookmarkedChapters = bookmarkedChapters;

            // Save the updated user document
            await user.save();
            console.log(user.currentCourseState.bookmarkedChapters);

            return res.status(201).json(user.currentCourseState.bookmarkedChapters);
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                errorMsg: 'Error at addBookmark controller',
                actualError: error.message,
            });
        }
    }


}

module.exports = courseController;