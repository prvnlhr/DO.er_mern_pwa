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

    addLastOpenedTopic: async (req, res) => {
        try {

            const { currentCourseIndex, currentChapterIndex, currentTopicIndex } = req.body;


            // console.log('at addLastOpenedTopic', currentCourseIndex, currentChapterIndex, currentTopicIndex, req.user.userId)

            const user = await User.findById(req.user.userId);


            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Find the existing topic in the last opened topics array, if present
            const existingTopicIndex = user.currentCourseState.lastOpenedTopics.findIndex(
                (topic) =>
                    topic.courseIndex === currentCourseIndex &&
                    topic.chapterIndex === currentChapterIndex &&
                    topic.topicIndex === currentTopicIndex
            );

            // If the topic is already in the array, remove it from its current position
            if (existingTopicIndex !== -1) {
                user.currentCourseState.lastOpenedTopics.splice(existingTopicIndex, 1);
            }

            // Add the topic to the beginning of the array
            user.currentCourseState.lastOpenedTopics.unshift({
                courseIndex: currentCourseIndex,
                chapterIndex: currentChapterIndex,
                topicIndex: currentTopicIndex,
            });

            // Keep only the latest N topics (e.g., 10) in the array
            const maxTopics = 10;
            user.currentCourseState.lastOpenedTopics = user.currentCourseState.lastOpenedTopics.slice(0, maxTopics);

            await user.save();

            return res.status(200).json(
                user.currentCourseState.lastOpenedTopics,
            );
        } catch (error) {
            console.error('Error in addLastOpenedTopic:', error);
            res.status(500).json({ errorMsg: 'Error updating last opened topic', actualError: error.message });
        }
    },

    getCourseData: async (req, res) => {
        try {
            const user = await User.findById(req.user.userId);

            if (!user) {
                return res.status(500).json({ errorMsg: 'Didnt find user' });
            }

            const currentDate = new Date();
            const lastVisitedDate = user.currentCourseState.lastVisited;

            if (
                !lastVisitedDate || // User hasn't visited before
                lastVisitedDate.getDate() !== currentDate.getDate() || // User visited on a different day
                lastVisitedDate.getMonth() !== currentDate.getMonth() || // User visited in a different month
                lastVisitedDate.getFullYear() !== currentDate.getFullYear() // User visited in a different year
            ) {
                // Update the streak since the user visited on a new day
                user.currentCourseState.maxStreak++;
            }

            // Update the last visited date
            user.currentCourseState.lastVisited = new Date();
            await user.save();

            return res.status(201).json({ courseData: user });
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
            const { dayOfWeek, timeSpent } = req.body;
            // console.log(dayOfWeek, timeSpent);
            // Find the user by userId
            const user = await User.findById(req.user.userId);

            if (!user) {
                return res.status(500).json("User not found");
            }

            // Ensure that dailyTimeSpent is an array
            if (!Array.isArray(user.currentCourseState.dailyTimeSpent)) {
                user.currentCourseState.dailyTimeSpent = [0, 0, 0, 0, 0, 0, 0];
            }

            // Reset time spent at the start of the week (Sunday)
            if (dayOfWeek === 0) {

                // Calculate total time spent in days and store
                const totalTimeSpentInMinutes = user.currentCourseState.dailyTimeSpent.reduce((total, time) => total + time, 0);

                user.currentCourseState.totalTimeSpent = totalTimeSpentInMinutes;

                // Reset dailyTimeSpent array for the new week
                user.currentCourseState.dailyTimeSpent = [0, 0, 0, 0, 0, 0, 0];
            }
           
            // Update the time spent for the specified dayOfWeek
            user.currentCourseState.dailyTimeSpent[dayOfWeek] += timeSpent;

            // Save the user
            await user.save();

            // Return the updated dailyTimeSpent array
            return res.status(201).json(user.currentCourseState.dailyTimeSpent);
        } catch (error) {
            // console.log(error);
            res.status(500).json({
                errorMsg: "Error at updateDailyTimeSpent controller",
                actualError: error.message,
            });
        }
    },

    addBookmark: async (req, res) => {
        try {
            const { courseIndx, chapterIndx } = req.body;

            // console.log(req.user.userId);

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
            // console.log('before', bookmarkedChapters);
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
            // console.log(user.currentCourseState.bookmarkedChapters);

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