const { User } = require("../model/userData")


const courseController = {

    updateCourseProgress: async (req, res) => {
        try {
            const { user_id, courseIndex, chapterIndex, topicIndex, numCourses, numChaptersInCourse, numTopicsInChapter } = req.body;

            // console.log(user_id, courseIndex, chapterIndex, topicIndex, numCourses, numChaptersInCourse, numTopicsInChapter);


            const userId = user_id;

            const user = await User.findById(userId);

            // console.log('oh see we got user with that id', user);

            // Initialize completedCourses, completedChapters, and completedTopics if they are undefined
            user.currentCourseState.completedCourses = user.currentCourseState.completedCourses || {};
            user.currentCourseState.completedChapters[courseIndex] = user.currentCourseState.completedChapters[courseIndex] || {};
            user.currentCourseState.completedTopics[courseIndex] = user.currentCourseState.completedTopics[courseIndex] || {};
            user.currentCourseState.completedTopics[courseIndex][chapterIndex] = user.currentCourseState.completedTopics[courseIndex][chapterIndex] || {};

            // Mark the topic as completed
            // console.log(user.currentCourseState.completedTopic);
            user.currentCourseState.completedTopics[courseIndex][chapterIndex][topicIndex] = true;
            // console.log('reached line 1');
            // Check if all topics in the chapter are completed and mark the chapter as completed if necessary
            const completedTopicsInChapter = Object.values(user.currentCourseState.completedTopics[courseIndex][chapterIndex]).filter((completed) => completed).length;
            // console.log('completedTopicsInChapter', completedTopicsInChapter);
            const isChapterCompleted = numTopicsInChapter === completedTopicsInChapter;
            // console.log('isChapterCompleted', isChapterCompleted);
            user.currentCourseState.completedChapters[courseIndex][chapterIndex] = isChapterCompleted;

            // Check if all chapters in the course are completed and mark the course as completed if necessary
            const completedChaptersInCourse = Object.values(user.currentCourseState.completedChapters[courseIndex]).filter((completed) => completed).length;
            // console.log('completedChaptersInCourse', completedChaptersInCourse);

            const isCourseCompleted = numChaptersInCourse === completedChaptersInCourse;
            // console.log('isCourseCompleted', isCourseCompleted);
            user.currentCourseState.completedCourses[courseIndex] = isCourseCompleted;

            await user.save();

            // Respond with success
            res.status(200).json({
                success: true,
                currentCourseState: user.currentCourseState,
            });
        } catch (error) {
            console.log("error at updateCourseProgress controller", error);
            res.status(500).json({ error: 'Server Error' });
        }
    },

    getCourseData: async (req, res) => {
        try {
            const user_id = req.params.userId;
            const user = await User.findById(user_id).select('currentCourseState');
            if (!user) {
                res.status(500).json('Didnt find user');
            } else {
                res.status(201).json(user.currentCourseState);
            }
        } catch (error) {
            console.error("Error while adding a new user:", error);
            res.status(500).json({ error: "Failed to add a new user." });
        }
    },

    updateTimeSpentData: async (req, res) => {
        console.log('update time', userId, currentDayOfWeek, currentTimeSpent)
        try {
            const user = await User.findById(userId);
            if (!user) {
                res.status(500).json('Didnt find user');
            }
            user.timeSpentData[currentDayOfWeek] += currentTimeSpent;
            await user.save();
            res.status(201).json(user.timeSpentData);
        } catch (error) {
            res.status(500).json({ error: "Failed to update spent time" });
        }
    },

    addBookmark: async (req, res) => {
        try {
            const { user_id, courseIndx, chapterIndx } = req.body;

            // Find the user by user_id
            const user = await User.findById(user_id);
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
            if (bookmarkedChapters[courseIndx].includes(chapterIndx)) {
                // Chapter is already bookmarked, send success response
                return res.status(200).json(bookmarkedChapters);
            }

            // Add the chapterIndex to the bookmarks array for the course
            bookmarkedChapters[courseIndx].push(chapterIndx);

            // Save the updated user document
            await user.save();
            console.log(user.currentCourseState.bookmarkedChapters);

            return res.status(201).json(user.currentCourseState.bookmarkedChapters);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to add a bookmark' });
        }
    }

}

module.exports = courseController;