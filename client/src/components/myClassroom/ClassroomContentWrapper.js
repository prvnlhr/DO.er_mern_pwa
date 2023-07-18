import React from 'react'
import styles from "./styles/classroomContentWrapperStyles.module.css"
import CourseCard from '../course/CourseCard';
const ClassroomContentWrapper = () => {
    return (
        <div className={styles.classroomContentWrapper} >
            <div className={styles.inProgressSection} >

                <div className={styles.inProgressHeadingWrapper} >
                    <div className={styles.inProgressHeadingIndictor} ></div>
                    <p className={styles.inProgressHeadingText}>
                        In Progress
                    </p>
                </div>
                <div className={styles.inProgressListWrapper} >
                    <CourseCard />
                </div>


            </div>
        </div>
    )
}

export default ClassroomContentWrapper;