import React, { useEffect } from "react";
import appStyles from "./app.module.css";
import AppHeader from "./appLayout/AppHeader"
import AppSubPagesWrapper from "./appLayout/AppSubPagesWrapper"
import { CourseProvider } from "../appState/appContext"
import { verifyAuthentication } from "../redux/features/auth/authSlice"
import { getCourseData } from "../redux/features/course/courseSlice"
import { useDispatch, useSelector } from 'react-redux'
import { updateTimeSpent } from "../redux/features/course/timeSpentSlice"
const App = () => {

    const dispatch = useDispatch();





    const authState = useSelector((state) => state.auth)

    const { userId, accessToken } = authState || {};


    useEffect(() => {
        dispatch(verifyAuthentication({}));
    }, [])


    useEffect(() => {
        if (userId && accessToken) {
            dispatch(getCourseData(userId));
            const storedData = JSON.parse(localStorage.getItem('timeSpentData')) || {};
            dispatch(updateTimeSpent(storedData));
        }

    }, [userId, accessToken])


    return (
        <CourseProvider>
            <div className={appStyles.app}>
                <div className={appStyles.appInnerwrapper} >
                    <AppHeader />
                    <AppSubPagesWrapper />
                </div>
            </div>
        </CourseProvider>

    )
}
export default App;