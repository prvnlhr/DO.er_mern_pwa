import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { coursesList } from "../../../courseData/courseData";
import * as api from "../../api/index"

const initialState = {
    currentCourseState: {
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
    }
}

export const markTopicProgress = createAsyncThunk('course/progress', async ({ user_id, courseIndx, chapterIndx, topicIndx }, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {

        const numCourses = coursesList.length;
        const numChapterInCourse = coursesList[courseIndx].chaptersList.length;
        const numTopicsInChapter = coursesList[courseIndx].chaptersList[chapterIndx].topicsList.length;

        const reqData = {
            user_id: user_id,
            courseIndex: courseIndx,
            chapterIndex: chapterIndx,
            topicIndex: topicIndx,
            numCourses: numCourses,
            numChaptersInCourse: numChapterInCourse,
            numTopicsInChapter: numTopicsInChapter
        }
        const res = await api.updateCourseProgress(reqData);
        const { completedCourses, completedChapters, completedTopics } = res.data.currentCourseState;
        const newData = { completedCourses, completedChapters, completedTopics }
        return fulfillWithValue(newData);
    } catch (error) {
        const errorMessage = error?.response.data.msg
        return rejectWithValue({ errorMessage });
    }
})

export const addCourseBookmark = createAsyncThunk('course/bookmarChapter', async ({ user_id, courseIndx, chapterIndx }, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        console.log(user_id, courseIndx, chapterIndx);
        const reqData = {
            user_id,
            courseIndx,
            chapterIndx
        }
        const res = await api.updateCourseBookmarks(reqData);
        console.log(res.data);
        return fulfillWithValue(res.data);
    } catch (error) {
        const errorMessage = error?.response.data.msg
        return rejectWithValue({ errorMessage });
    }
})



export const getCourseData = createAsyncThunk('course/getData', async (user_id, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {

        const res = await api.getCourseData(user_id);
        const courseProgressData = {
            completedCourses: res.data.completedCourses,
            completedChapters: res.data.completedChapters,
            completedTopics: res.data.completedTopics,
            bookmarkedChapters: res.data.bookmarkedChapters,
        }
        console.log(courseProgressData);
        return fulfillWithValue(courseProgressData);
    } catch (error) {
        const errorMessage = error?.response.data.msg
        return rejectWithValue({ errorMessage });
    }
})

const courseSlice = createSlice({
    name: 'course',
    initialState: initialState,
    reducers: {
        updateCourseState: (state, action) => {
            const { data } = action.payload;

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
    },
    extraReducers: (builder) => {

        builder
            .addCase(markTopicProgress.fulfilled, (state, action) => {
                // console.log(action.payload);
                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                        ...action.payload,
                    },
                }
            })
            .addCase(markTopicProgress.rejected, (state, action) => {
                // console.log(action.payload);
                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                    },
                }
            })
            .addCase(getCourseData.fulfilled, (state, action) => {

                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                        ...action.payload
                    },
                }

            })
            .addCase(addCourseBookmark.fulfilled, (state, action) => {
                console.log(action.payload);
                return {
                    ...state,
                    currentCourseState: {
                        ...state.currentCourseState,
                        bookmarkedChapters: action.payload
                    },

                }

            })

    }
})


export const { updateCourseState, markTopicComplete } = courseSlice.actions;
export default courseSlice.reducer;