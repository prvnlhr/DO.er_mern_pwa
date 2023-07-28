import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCourseContext } from '../../appState/appContext';

import styles from "./styles/coursePageHeaderStyles.module.css"
import ClockIcon from "../icons/ClockIcon"
import CourseChapterIcon from "../icons/CourseChapterIcon"
import BackBtnIcon from "../icons/BackBtnIcon"

import { coursesList } from "../../courseData/courseData.js"
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

const CoursePageHeader = () => {

  const navigate = useNavigate();

  const { currentCourseData } = useCourseContext();






  return (
    <>
      <div className={styles.courseHeaderWrapper}>

        <div className={styles.headerInnerWrapper} >
          <div className={styles.backBtnIconWrapper} >
            <div className={styles.backBtnIconDiv} onClick={() => navigate(-1)}>
              <BackBtnIcon />
            </div>
          </div>

          <div className={styles.headingWrapper}>
            <p className={styles.headingText} >{coursesList[currentCourseData.currentCourseIndex].modulesList[currentCourseData.currentCourseModuleIndex].module_title}</p>
          </div>
        </div>

      </div>
      {/* --------------------------------------------------------- */}
      <div className={styles.descriptionInfoWrapper} >
        <div className={styles.descriptionInfoInnerWrapper} >

          <div className={styles.courseDescriptionWrapper} >
            <p className={styles.courseDescText}>
              {coursesList[currentCourseData.currentCourseIndex].courseDescription}
            </p>          </div>
          <div className={styles.courseInfoGraphicWrapper} >
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
                      {coursesList[currentCourseData.currentCourseIndex].modulesList.length}
                    </p>

                  </div>
                </div>
                <div className={styles.infoElementWrapper} >
                  <div className={styles.infoIconWrapper} >
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
        </div>

      </div>
    </>
  )
}

export default CoursePageHeader;