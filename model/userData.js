const mongoose = require("mongoose");


const currentCourseProgressStateSchema = new mongoose.Schema({
    timeSpentData: {
        type: [Number], // Array of numbers representing time spent in minutes for each day (0 = Sunday, 1 = Monday, etc.)
        default: [0, 0, 0, 0, 0, 0, 0], // Default value of 0 minutes for each day
    },
    completedCourses: {
        type: Object,
        default: {}
    },
    completedChapters: {
        type: Object,
        default: {}
    },
    completedTopics: {
        type: Object,
        default: {}
    },
    bookmarkedChapters: {
        type: Object, // Object to store bookmarked chapters data
        default: {}, // Default value is an empty object
    },
});


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    currentCourseState: {
        type: currentCourseProgressStateSchema,
        default: {}
    }
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = { User };
