import React from 'react'
import styles from "./styles/allCoursePageStyles.module.css"
import AllCourseHeader from "./AllCourseHeader"
import AllCourseBody from "./AllCourseBody"

const AllCoursePage = () => {
    return (
        <div className={styles.allCoursesPageWrapper} >
            <AllCourseHeader />
            <AllCourseBody />
        </div>
    )
}

export default AllCoursePage;