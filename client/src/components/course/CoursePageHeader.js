import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from "./styles/coursePageHeaderStyles.module.css"
import ClockIcon from "../icons/ClockIcon"
import CourseChapterIcon from "../icons/CourseChapterIcon"
import BackBtnIcon from "../icons/BackBtnIcon"
const CoursePageHeader = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.headerWrapper}>

      <div className={styles.courseNameDescWrapper}>

        <div className={styles.courseNameWrapper} >
          <div className={styles.backBtnContainer} >
            <div className={styles.backBtIconDiv} onClick={() => navigate(-1)} >
              <BackBtnIcon />
            </div>
          </div>
          <div className={styles.courseNameDiv} >
            <p className={styles.courseNameText} >JavaScript</p>
          </div>
        </div>

        <div className={styles.courseDescriptionWrapper} >
          <p className={styles.courseDescText}> JavaScript (JS) is the most popular lightweight, interpreted compiled programming language. It can be used for both Client-side as well as Server-side developments.</p>
        </div>

      </div>
      <div className={styles.courseInfoGraphicWrapper}>
        <div className={styles.infoElementOuterWrapper} >
          <div className={styles.infoElementWrapper} >
            <div className={styles.infoIconWrapper} >
              {/* <OverviewStreakIcon /> */}
              <div className={styles.infoIconDiv}>
                <CourseChapterIcon />
              </div>
            </div>
            <div className={styles.infoAttributeWrapper} >
              <p className={styles.infoAtrrText} >Total Chapters</p>
            </div>
            <div className={styles.infoValueWrapper} >
              <p className={styles.infoValueText} >24</p>

            </div>
          </div>
          <div className={styles.infoElementWrapper} >
            <div className={styles.infoIconWrapper} >
              {/* <OverviewScoreIcon /> */}
              <div className={styles.infoIconDiv}>
                <ClockIcon />
              </div>

            </div>
            <div className={styles.infoAttributeWrapper} >
              <p className={styles.infoAtrrText} >Time Required</p>

            </div>
            <div className={styles.infoValueWrapper} >
              <p className={styles.infoValueText} >7h 25min</p>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default CoursePageHeader;