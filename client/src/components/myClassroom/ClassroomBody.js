import React from 'react'
import styles from "./styles/classroomBodyStyles.module.css"
import CourseCard from '../course/CourseCard';
import InProgressList from "./InProgressList"
const ClassroomBody = () => {
    return (
        <div className={styles.classroomBodyWrapper} >
            <InProgressList />
        </div>
    )
}

export default ClassroomBody;