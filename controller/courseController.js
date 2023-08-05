const { User } = require("../model/userData")


const courseController = {

    updateCourseProgress: async (req, res) => {
        try {
            const { user_id, courseIndex, chapterIndex, topicIndex, numCourses, numChaptersInCourse, numTopicsInChapter } = req.body;

            console.log(user_id, courseIndex, chapterIndex, topicIndex, numCourses, numChaptersInCourse, numTopicsInChapter);


            const userId = user_id;

            const user = await User.findById(userId);

            console.log('oh see we got user with that id', user);

            // Initialize completedCourses, completedChapters, and completedTopics if they are undefined
            user.currentCourseState.completedCourses = user.currentCourseState.completedCourses || {};
            user.currentCourseState.completedChapters[courseIndex] = user.currentCourseState.completedChapters[courseIndex] || {};
            user.currentCourseState.completedTopics[courseIndex] = user.currentCourseState.completedTopics[courseIndex] || {};
            user.currentCourseState.completedTopics[courseIndex][chapterIndex] = user.currentCourseState.completedTopics[courseIndex][chapterIndex] || {};

            // Mark the topic as completed
            console.log(user.currentCourseState.completedTopic);
            user.currentCourseState.completedTopics[courseIndex][chapterIndex][topicIndex] = true;
            console.log('reached line 1');
            // Check if all topics in the chapter are completed and mark the chapter as completed if necessary
            const completedTopicsInChapter = Object.values(user.currentCourseState.completedTopics[courseIndex][chapterIndex]).filter((completed) => completed).length;
            console.log('completedTopicsInChapter', completedTopicsInChapter);
            const isChapterCompleted = numTopicsInChapter === completedTopicsInChapter;
            console.log('isChapterCompleted', isChapterCompleted);
            user.currentCourseState.completedChapters[courseIndex][chapterIndex] = isChapterCompleted;

            // Check if all chapters in the course are completed and mark the course as completed if necessary
            const completedChaptersInCourse = Object.values(user.currentCourseState.completedChapters[courseIndex]).filter((completed) => completed).length;
            console.log('completedChaptersInCourse', completedChaptersInCourse);

            const isCourseCompleted = numChaptersInCourse === completedChaptersInCourse;
            console.log('isCourseCompleted', isCourseCompleted);
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
            console.log(user_id);
            console.log(req);
            console.log('get course Data', user_id)
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

    updateTimeSpentData: async (userId, currentDayOfWeek, currentTimeSpent) => {
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
            console.error("Error updating time spent data:", error);
            throw error;
        }
    },




}

module.exports = courseController;