import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import styles from "./styles/appSubPageWrapperStyles.module.css"
import ClassroomPage from '../myClassroom/ClassroomPage';
import CoursePage from "../course/CoursePage"
import TopicsPage from "../topicPage/TopicsPage"
import LandingPage from '../landingPage/LandingPage';
import AllCoursePage from "../allCourses/AllCoursesPage"

import SearchPage from '../search/SearchPage';
import { useSelector } from 'react-redux'
import RequireAuth from '../protectedRoutes/RequireAuth';

const AppSubPagesWrapper = () => {

    const currentCourseState = useSelector((state) => state.course.currentCourseState);
    const { searchResultList } = currentCourseState;
    return (

        <div className={styles.appSubPageWrapperStyles}>

            {
                searchResultList.length > 0 ?
                    < SearchPage />
                    :
                    <>
                        <Routes>
                            <Route path='/' element={
                                <LandingPage />
                            } />

                            <Route path="/user/classroom" element={
                                <RequireAuth>
                                    <ClassroomPage />
                                </RequireAuth>
                            } />

                            <Route path='/user/course' element={
                                <CoursePage />
                            } />

                            <Route path='/user/topic' element={
                                <TopicsPage />
                            } />
                            <Route path='/user/allcourses' element={
                                <AllCoursePage />
                            } />

                        </Routes>

                    </>

            }




        </div>

    )
}

export default AppSubPagesWrapper;