import React from 'react'
import styles from "./styles/coursePageBodyStyles.module.css"
import CoursePageHeader from './CoursePageHeader'
import CourseModuleCard from './CourseModuleCard'
import CourseModulesList from './CourseModulesList'

const CoursePageBody = () => {
  return (
    <div className={styles.bodyWrapper} >
      <CourseModulesList />
    </div>
  )
}

export default CoursePageBody