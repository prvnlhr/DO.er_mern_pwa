import React, { useEffect, useState, useRef } from "react";
import appStyles from "./app.module.css";
import AppHeader from "./appLayout/AppHeader"
import AppSubPagesWrapper from "./appLayout/AppSubPagesWrapper"
import { useDispatch, useSelector } from 'react-redux'
import { CourseProvider } from "../appState/appContext"
import { getUserData } from "../redux/features/user/userSlice"
import { updateDailyTimeSpent, getCourseDataAsync } from "../redux/features/course/courseSlice"
import { checkAuthAsync } from "../redux/features/auth/authSlice"
import AuthComponent from "./auth/AuthComponent";


import { useLocalAuthContext } from "../appState/localAuthContext"


const App = () => {

    const dispatch = useDispatch();

    const popUpMenuRef = useRef();


    const authState = useSelector((state) => state.auth)
    const { userId, accessToken } = authState || {};

    const { localAuthData } = useLocalAuthContext();




    useEffect(() => {
        dispatch(checkAuthAsync())
    }, []);

    useEffect(() => {
        if (accessToken) {
            dispatch(getCourseDataAsync(accessToken));

            // get dailyTimeSpent Data from local storage and update in redux(not databse)            
            const storedData = JSON.parse(localStorage.getItem('dailyTimeSpent')) || {};
            dispatch(updateDailyTimeSpent(storedData));
        }

    }, [accessToken])


    return (
        <div className={appStyles.app}>
            <div className={appStyles.appInnerwrapper} >
                <div className={appStyles.overlay} ></div>

                {localAuthData.showAuthForm &&
                    <AuthComponent />
                }

                <AppHeader
                    popUpMenuRef={popUpMenuRef}
                />
                <AppSubPagesWrapper />
            </div>
        </div>

    )
}
export default App;