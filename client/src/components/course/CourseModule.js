import React from 'react'
import styles from "./styles/courseModuleStyles.module.css"
import JavaScriptLogo from '../icons/JavaScriptLogo'
import TiltedArrowIcon from '../icons/TiltedArrowIcon'

const CourseModule = () => {
  return (
    <div className={styles.moduleOuterWrapper}>

      <div className={styles.moduleWrapper} >
        <div className={styles.courseLogoWrapper} >
          <JavaScriptLogo />
        </div>
        <div className={styles.courseClickArrowWrapper} >

          <div className={styles.arrowLinkDiv} >
            <TiltedArrowIcon />
          </div>
        </div>
        <div className={styles.courseNameWrapper} >
          <p className={styles.courseNameText} >JavaScript</p>
        </div>
        <div className={styles.courseDescriptionWrapper} >
          <p className={styles.courseDesText} >
            Learn everything  about JS from basics to advance
          </p>
        </div>
        <div className={styles.lessonHeadingTextWrapper} >
          <p className={styles.lessonText} >
            Lesson
          </p>
        </div>

        <div className={styles.lessonContentWrapper}>
          <div className={styles.lessonPercentTextWrapper} >
            <p className={styles.lessonPercText} >
              80%
            </p>
          </div>

          <div className={styles.lessonBarWrapper}>
            <div className={styles.lessonBarContainer} >
              <div className={styles.lessonBarDiv} ></div>
            </div>
          </div>

          <div className={styles.lessonCompletedNumWrapper} >
            <p className={styles.lessonComNumText} >
              12/24
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseModule