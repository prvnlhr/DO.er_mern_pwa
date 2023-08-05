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


export const getCourseData = createAsyncThunk('course/getData', async (user_id, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        // console.log(user_id);
        const res = await api.getCourseData(user_id);
        // console.log(res.data);
        const courseProgressData = {
            completedCourses: res.data.completedCourses,
            completedChapters: res.data.completedChapters,
            completedTopics: res.data.completedTopics,
        }
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

    }
})


export const { updateCourseState, markTopicComplete } = courseSlice.actions;
export default courseSlice.reducer;