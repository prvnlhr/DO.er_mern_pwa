import React, { useEffect } from 'react'
import styles from "./styles/coursePageStyles.module.css"
import CoursePageHeader from './CoursePageHeader'
import CoursePageBody from './CoursePageBody'
import { useCourseContext } from "../../appState/appContext"
const CoursePage = () => {



  return (
    <div className={styles.coursePageWrapper} >
      <CoursePageHeader />
      <CoursePageBody />
    </div>
  )
}

export default CoursePage
