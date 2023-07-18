import React from 'react'
import styles from "./styles/appSubPageWrapperStyles.module.css"
import MyClassroomPage from '../myClassroom/MyClassroomPage';
import CoursePage from "../course/CoursePage"
import TopicsPage from "../topicPage/TopicsPage"
const AppSubPagesWrapper = () => {
    return (
        <div className={styles.appSubPageWrapperStyles}>
            {/* <MyClassroomPage /> */}
            {/* <CoursePage /> */}
            <TopicsPage />
        </div>
    )
}

export default AppSubPagesWrapper;