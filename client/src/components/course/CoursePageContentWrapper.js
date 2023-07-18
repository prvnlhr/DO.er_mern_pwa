import React from 'react'
import styles from "./styles/coursePageContentWrapperStyles.module.css"
import CoursePageHeader from './CoursePageHeader'
import CourseModule from './CourseModule'

const CoursePageContentWrapper = () => {
  return (
    <div className={styles.contentWrapper} >
      <div className={styles.courseModulesListWrapper}>
        <div className={styles.courseModuleListHeadingContainer} >
          <div className={styles.headingIndicator}></div>
          <p className={styles.headingText}>Modules</p>
        </div>
        <div className={styles.courseModuleCardListContainer} >
          <CourseModule />
          {/* <CourseModule /> */}
          {/* <CourseModule /> */}
          {/* <CourseModule /> */}
        </div>
      </div>
    </div>
  )
}

export default CoursePageContentWrapper