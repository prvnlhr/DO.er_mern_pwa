import React from 'react'
import styles from "./styles/courseModulesListStyles.module.css"
import CourseModuleCard from './CourseModuleCard'

const CourseModulesList = () => {
    return (
        <div className={styles.listComponentWrapper} >

            <div className={styles.listComponentInnerWrapper}>

                <div className={styles.listHeadingWrapper} >
                    <div className={styles.listHeadingIndicatorDiv}>
                        <div className={styles.indicator}></div>
                    </div>

                    <div className={styles.listHeadingDiv} >
                        <p className={styles.headingText}>Modules</p>
                    </div>
                </div>

                <div className={styles.listWrapper} >
                    <div className={styles.listInnerWrapper} >
                        <CourseModuleCard />
                        <CourseModuleCard />
                        <CourseModuleCard />
                        <CourseModuleCard />
                        <CourseModuleCard />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseModulesList