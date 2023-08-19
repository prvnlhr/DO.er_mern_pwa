const mongoose = require("mongoose");

const currentCourseProgressStateSchema = new mongoose.Schema(
    {
        dailyTimeSpent: {
            type: [Number], // Array of numbers representing time spent in minutes for each day (0 = Sunday, 1 = Monday, etc.)
            default: [0, 0, 0, 0, 0, 0, 0], // Default value of 0 minutes for each day
        },
        completedCourses: {
            type: Object,
            default: {},
        },
        completedChapters: {
            type: Object,
            default: {},
        },
        completedTopics: {
            type: Object,
            default: {},
        },
        bookmarkedChapters: {
            type: Object, // Object to store bookmarked chapters data
            default: {}, // Default value is an empty object
        },
        totalTimeSpent: {
            type: Number, // Total time spent in minutes
            default: 0, // Default value of 0 mins
        },
        lastOpenedTopics: {
            type: [
                {
                    courseIndex: Number,
                    chapterIndex: Number,
                    topicIndex: Number,
                },
            ],
            default: [],
        },
        maxStreak: {
            type: Number,
            default: 0, // Default value of 0
        },
        lastVisited: {
            type: Date,
        },

    },
    { minimize: false } // Set minimize option to false
);

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
            unique: true,
        },
        country: {
            type: String,
            required: true,
        },
        otp: {
            type: String,
        },
        otpExpiry: {
            type: Date,
        },
        isVerified: {
            type: Boolean,
            default: false, // Set to true when the phone number is verified with OTP
        },
        currentCourseState: {
            type: currentCourseProgressStateSchema,
            default: {},
        },
    },
    { minimize: false },
    {
        versionKey: false,
    }
);


// Create and export the User model
const User = mongoose.model("User", userSchema);
module.exports = { User };
