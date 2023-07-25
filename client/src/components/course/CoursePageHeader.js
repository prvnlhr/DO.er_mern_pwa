import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCourseContext } from '../../appState/appContext';

import styles from "./styles/coursePageHeaderStyles.module.css"
import ClockIcon from "../icons/ClockIcon"
import CourseChapterIcon from "../icons/CourseChapterIcon"
import BackBtnIcon from "../icons/BackBtnIcon"

import { coursesList } from "../../courseData/courseData.js"

const CoursePageHeader = () => {

  const navigate = useNavigate();

  const {
    currentCourseData,
    setCurrentCourseData
  } = useCourseContext();

  // console.log(currentCourseData, coursesList[currentCourseData.currentCourseIndex])





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
            <p className={styles.courseNameText} >{coursesList[currentCourseData.currentCourseIndex].title}</p>
          </div>
        </div>

        <div className={styles.courseDescriptionWrapper} >
          <p className={styles.courseDescText}>
            {coursesList[currentCourseData.currentCourseIndex].courseDescription}
          </p>
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
              <p className={styles.infoValueText} >
                {coursesList[currentCourseData.currentCourseIndex].modules}
              </p>

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
              <p className={styles.infoValueText} >
                {coursesList[currentCourseData.currentCourseIndex].time_required}
              </p>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default CoursePageHeader;