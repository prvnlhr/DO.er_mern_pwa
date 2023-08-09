import React from 'react'
import styles from "./styles/inProgressListStyles.module.css"
import InProgressCourseCard from './InProgressCourseCard'

const InProgressList = () => {
    return (
        <div className={styles.listComponentWrapper} >

            <div className={styles.listComponentInnerWrapper}>

                <div className={styles.listHeadingWrapper} >
                    <div className={styles.listHeadingIndicatorDiv}>
                        <div className={styles.indicator}></div>
                    </div>

                    <div className={styles.listHeadingDiv} >
                        <p className={styles.headingText}>In Progrxxzxzess</p>
                    </div>
                </div>

                <div className={styles.listWrapper} >
                    <div className={styles.listInnerWrapper} >
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InProgressList