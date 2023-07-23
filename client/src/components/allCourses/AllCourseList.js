import React from 'react'
import styles from "./styles/allCourseListStyle.module.css"
import AllCourseCard from "./AllCourseCard"

const AllCourseList = () => {
    return (
        <div className={styles.listComponentWrapper} >

            <div className={styles.listComponentInnerWrapper}>

                <div className={styles.listHeadingWrapper} >
                    <div className={styles.listHeadingIndicatorDiv}>
                        <div className={styles.indicator}></div>
                    </div>

                    <div className={styles.listHeadingDiv} >
                        <p className={styles.headingText}>Courses</p>
                    </div>
                </div>

                <div className={styles.listWrapper} >
                    <div className={styles.listInnerWrapper} >

                        <AllCourseCard />
                        <AllCourseCard />
                        <AllCourseCard />
                        <AllCourseCard />
                        <AllCourseCard />
                        <AllCourseCard />
                        <AllCourseCard />
                        <AllCourseCard />
                        <AllCourseCard />
                        <AllCourseCard />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllCourseList