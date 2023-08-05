import React, { useContext } from 'react'
import styles from "./styles/courseChaptersListStyles.module.css"
import CourseChapterCard from './CourseChapterCard'
import { coursesList } from "../../courseData/courseData"
import { useCourseContext } from "../../appState/appContext"
import { useSelector } from 'react-redux'
const CourseChaptersList = () => {


    const courseDataState = useSelector((state) => state.course.currentCourseState);

    const { currentCourseIndex, bookmarkedChapters } = courseDataState;
    const { chaptersList } = coursesList[currentCourseIndex];

    return (
        <div className={styles.listComponentWrapper} >

            <div className={styles.listComponentInnerWrapper}>

                <div className={styles.listHeadingWrapper} >
                    <div className={styles.listHeadingIndicatorDiv}>
                        <div className={styles.indicator}></div>
                    </div>

                    <div className={styles.listHeadingDiv} >
                        <p className={styles.headingText}>Chapters</p>
                    </div>
                </div>

                <div className={styles.listWrapper} >
                    <div className={styles.listInnerWrapper} >
                        {
                            chaptersList.map((chapterData, indx) => (
                                <CourseChapterCard key={indx} chapterData={chapterData} chapterIndex={indx} />
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseChaptersList