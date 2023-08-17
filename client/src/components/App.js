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
import doerLottie from "./LogoLottie/doerLottie.json"

import Lottie from 'react-lottie';

const App = () => {


    const dispatch = useDispatch();

    const popUpMenuRef = useRef();

    const [initialLoading, setInitialLoading] = useState(true);

    const authState = useSelector((state) => state.auth)
    const { userId, accessToken } = authState || {};

    const { localAuthData } = useLocalAuthContext();




    useEffect(() => {
        if (accessToken) {
            dispatch(getCourseDataAsync(accessToken));
        }
    }, [accessToken])


    useEffect(() => {
        dispatch(checkAuthAsync());
    }, [])


    return (
        <div className={appStyles.app}>
            <div className={appStyles.appInnerwrapper} >
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