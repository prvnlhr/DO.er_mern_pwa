import React from 'react'
import styles from "./styles/allCoursePageStyles.module.css"
import AllCourseHeader from "./AllCourseHeader"
import AllCourseBody from "./AllCourseBody"
import AllCourseDescription from './AllCourseDescription'

const AllCoursePage = () => {
    return (
        <div className={styles.allCoursesPageWrapper} >
            <AllCourseHeader />
            <AllCourseDescription />
            <AllCourseBody />
        </div>
    )
}

export default AllCoursePage;