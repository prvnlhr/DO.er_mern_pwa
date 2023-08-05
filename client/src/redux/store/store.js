import { configureStore } from '@reduxjs/toolkit'


import courseSlice from "../features/course/courseSlice"
import authSlice from "../features/auth/authSlice"
import timeSpentSlice from '../features/course/timeSpentSlice'

const store = configureStore({
    reducer: {
        course: courseSlice,
        auth: authSlice,
        timeSpent: timeSpentSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
