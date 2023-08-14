import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { coursesList } from "../../../courseData/courseData";
import * as api from "../../api/index"

const initialState = {
    currentCourseState: {
        isLoading: false,
        currentCourseIndex: 0,
        currentChapterIndex: 0,
        currentTopicIndex: 0,
        currentMarkdownContent: '',
        searchResultList: [],
        isMarkDownLoading: false,
        completedCourses: {},
        completedChapters: {},
        completedTopics: {},
        bookmarkedChapters: {},
        dailyTimeSpent: {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
        },
        lastOpenedTopics: JSON.parse(localStorage.getItem('lastOpenedTopics')) || [],

    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const updateDailyTimeSpentAsync = createAsyncThunk('course/updateDailyTimeSpentInDB', async ({ dayOfWeek, timeSpent }, { getState, fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await api.updateDailyTimeSpentRequest(dayOfWeek, timeSpent);
        return fulfillWithValue(response.data);

    } catch (error) {
        const errorMessage = error?.response.data.msg
        const { errorMsg, actualError } = error?.response?.data;
        return rejectWithValue({
            errorMsg: errorMsg || 'unknown msg'
        });
    }
});

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const markTopicCompletionAsync = createAsyncThunk('course/progress', async ({ user_id, courseIndx, chapterIndx, topicIndx }, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        const numCourses = coursesList.length;
        const numChapterInCourse = coursesList[courseIndx].chaptersList.length;
        const numTopicsInChapter = coursesList[courseIndx].chaptersList[chapterIndx].topicsList.length;

        // console.log(user_id, courseIndx, chapterIndx, topicIndx);

        const reqData = {
            user_id: user_id,
            courseIndex: courseIndx,
            chapterIndex: chapterIndx,
            topicIndex: topicIndx,
            numCourses: numCourses,
            numChaptersInCourse: numChapterInCourse,
            numTopicsInChapter: numTopicsInChapter
        }
        const res = await api.markTopicCompletionRequest(reqData);
        const { completedCourses, completedChapters, completedTopics } = res.data.currentCourseState;
        const newData = { completedCourses, completedChapters, completedTopics }
        return fulfillWithValue(newData);
        // return fulfillWithValue({});
    } catch (error) {
        const errorMessage = error?.response.data.msg
        const { errorMsg, actualError } = error?.response?.data;
        return rejectWithValue({
            errorMsg: errorMsg || 'unknown msg'
        });
    }
})

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const bookmarkCourseAsync = createAsyncThunk('course/bookmarChapter', async ({ accessToken, courseIndx, chapterIndx }, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        // console.log(user_id, courseIndx, chapterIndx);
        const reqData = {
            courseIndx, chapterIndx
        }
        const res = await api.bookmarkCourseRequest(accessToken, reqData);
        // console.log(res.data);
        return fulfillWithValue(res.data);
    } catch (error) {
        const errorMessage = error?.response.data.msg
        const { errorMsg, actualError } = error?.response?.data;
        return rejectWithValue({
            errorMsg: errorMsg || 'unknown msg'
        });
    }
})

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const getCourseDataAsync = createAsyncThunk('course/getCourseData', async (token, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {

        const res = await api.getUserDataRequest(token);
        // console.log(res.data.courseData.currentCourseState);
        const { currentCourseState } = res?.data.courseData;
        return fulfillWithValue(currentCourseState);
    } catch (error) {
        const errorMessage = error?.response.data.msg
        const { errorMsg, actualError } = error?.response?.data;
        return rejectWithValue({
            errorMsg: errorMsg || 'unknown msg at getCourseDataAsync'
        });
    }
})

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const courseSlice = createSlice({
    name: 'course',
    initialState: initialState,
    reducers: {
        addLastOpenedTopic: (state, action) => {
            const { courseIndex, chapterIndex, topicIndex } = action.payload;
            const { currentCourseIndex, currentChapterIndex, currentTopicIndex } = state.currentCourseState;

            // Filter out the topic if it's already present in the list
            const filteredLastOpenedTopics = state.currentCourseState.lastOpenedTopics.filter(
                topic => !(topic.courseIndex === currentCourseIndex && topic.chapterIndex === currentChapterIndex && topic.topicIndex === currentTopicIndex)
            );

            // Add the topic to the beginning of the list
            const newLastOpenedTopics = [
                { courseIndex: currentCourseIndex, chapterIndex: currentChapterIndex, topicIndex: currentTopicIndex },
                ...filteredLastOpenedTopics
            ].slice(0, 10); // Keep only the latest 10 items
            localStorage.setItem('lastOpenedTopics', JSON.stringify(newLastOpenedTopics));
            return {
                ...state,
                currentCourseState: {
                    ...state.currentCourseState,
                    lastOpenedTopics: newLastOpenedTopics,
                },
            };
        },

        updateCourseState: (state, action) => {
            const { data } = action.payload;
            // console.log(data);

            if (data) {
                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                        ...data,
                    },
                }
            }
        },
        updateDailyTimeSpent: (state, action) => {
            // console.log(action.payload);
            return {
                ...state,
                currentCourseState: {
                    ...state.currentCourseState,
                    ...action.payload
                }
            };
        },
        resetTimeSpent: (state) => {
            return {
                ...state,
                dailyTimeSpent: initialState.dailyTimeSpent,
            };
        },

    },
    extraReducers: (builder) => {

        builder
            .addCase(markTopicCompletionAsync.fulfilled, (state, action) => {
                // console.log(action.payload);
                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                        ...action.payload,
                    },
                }
            })
            .addCase(markTopicCompletionAsync.rejected, (state, action) => {
                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                    },
                }
            })
            .addCase(getCourseDataAsync.fulfilled, (state, action) => {

                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                        ...action.payload
                    },
                }

            })
            .addCase(getCourseDataAsync.rejected, (state, action) => {

                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                        ...action.payload
                    },
                }

            })
            .addCase(bookmarkCourseAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                        bookmarkedChapters: action.payload,
                        isLoading: false
                    },

                }

            })
            .addCase(bookmarkCourseAsync.pending, (state, action) => {
                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                        isLoading: true
                    },

                }

            })
            .addCase(bookmarkCourseAsync.rejected, (state, action) => {
                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                        isLoading: false
                    },

                }

            })
            .addCase(updateDailyTimeSpentAsync.fulfilled, (state, action) => {
                return {
                    ...state,

                }
            })
            .addCase(updateDailyTimeSpentAsync.rejected, (state, action) => {
                // Handle the rejected case if needed
                console.log('Error updating time spent in database:', action.error.message);
            });

    }
})


export const { updateDailyTimeSpent, resetTimeSpent, updateCourseState, markTopicComplete, addLastOpenedTopic } = courseSlice.actions;
export default courseSlice.reducer;