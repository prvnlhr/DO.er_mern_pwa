import React from 'react'
import styles from "./styles/coursePageStyles.module.css"
import CoursePageHeader from './CoursePageHeader'
import CoursePageBody from './CoursePageBody'
const CoursePage = () => {
  return (
    <div className={styles.coursePageWrapper} >
      <CoursePageHeader />
      <CoursePageBody />
    </div>
  )
}

export default CoursePage