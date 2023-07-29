import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import styles from "./styles/appSubPageWrapperStyles.module.css"
import MyClassroomPage from '../myClassroom/MyClassroomPage';
import CoursePage from "../course/CoursePage"
import TopicsPage from "../topicPage/TopicsPage"
import LandingPage from '../landingPage/LandingPage';
import AllCoursePage from "../allCourses/AllCoursesPage"
import { useCourseContext } from '../../appState/appContext';
import { CourseProvider } from '../../appState/appContext';
import SearchPage from '../search/SearchPage';


const AppSubPagesWrapper = () => {



    return (

        <div className={styles.appSubPageWrapperStyles}>
            <Routes>
                <Route path='/ss' element={
                    <LandingPage />
                } />

                <Route path="/user/classroom" element={
                    <MyClassroomPage />
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
                <Route path='/' element={<SearchPage />} />


            </Routes>
        </div>

    )
}

export default AppSubPagesWrapper;