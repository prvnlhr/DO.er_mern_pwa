import React from 'react'
import styles from "./styles/inProgressListStyles.module.css"
import CourseCard from '../course/CourseCard'

const InProgressList = () => {
    return (
        <div className={styles.listComponentWrapper} >

            <div className={styles.listComponentInnerWrapper}>

                <div className={styles.listHeadingWrapper} >
                    <div className={styles.listHeadingIndicatorDiv}>
                        <div className={styles.indicator}></div>
                    </div>

                    <div className={styles.listHeadingDiv} >
                        <p className={styles.headingText}>In Progress</p>
                    </div>
                </div>

                <div className={styles.listWrapper} >
                    <div className={styles.listInnerWrapper} >
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InProgressList