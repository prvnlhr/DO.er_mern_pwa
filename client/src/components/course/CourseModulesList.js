import React, { useContext } from 'react'
import styles from "./styles/courseModulesListStyles.module.css"
import CourseModuleCard from './CourseModuleCard'
import { coursesList } from "../../courseData/courseData"
import { useCourseContext } from "../../appState/appContext"
const CourseModulesList = () => {
    const {
        currentCourseData,
        setCurrentCourseData,
    } = useCourseContext();

    console.log(currentCourseData)
    console.log(coursesList[currentCourseData.currentCourseIndex].modulesData)
    const { modulesData } = coursesList[currentCourseData.currentCourseIndex];
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
                        {

                            modulesData.map((moduleData, indx) => (
                                <CourseModuleCard moduleData={moduleData} moduleIndex={indx} />
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseModulesList