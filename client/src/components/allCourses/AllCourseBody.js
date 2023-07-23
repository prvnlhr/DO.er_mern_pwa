import React from 'react'
import styles from "./styles/allCourseBodyStyle.module.css"
import AllCourseList from './AllCourseList'


const AllCourseBody = () => {
    return (
        <div className={styles.pageBodyWrapper} >
            <AllCourseList />
        </div>
    )
}

export default AllCourseBody