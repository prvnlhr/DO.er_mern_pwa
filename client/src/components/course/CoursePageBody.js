import React from 'react'
import styles from "./styles/coursePageBodyStyles.module.css"
import CoursePageHeader from './CoursePageHeader'
import CourseChapterCard from './CourseChapterCard'
import CourseChaptersList from './CourseChaptersList'

const CoursePageBody = () => {
  return (
    <div className={styles.bodyWrapper} >
      <CourseChaptersList />
    </div>
  )
}

export default CoursePageBody