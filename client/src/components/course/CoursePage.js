import React from 'react'
import styles from "./styles/coursePageStyles.module.css"
import CoursePageHeader from './CoursePageHeader'
import CoursePageContentWrapper from './CoursePageContentWrapper'
const CoursePage = () => {
  return (
    <div className={styles.coursePageWrapper} >
      <CoursePageHeader />
      <CoursePageContentWrapper />
    </div>
  )
}

export default CoursePage