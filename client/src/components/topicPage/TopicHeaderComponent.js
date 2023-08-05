import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"

import styles from "./styles/topicHeaderComponentStyles.module.css"
import BackBtnIcon from '../icons/BackBtnIcon';
import SideBarShowIcon from "../icons/SideBarShowIcon"
import { useSelector } from 'react-redux';
const TopicHeaderComponent = ({ toggleSidebar }) => {

  const navigate = useNavigate();

  const currCourseState = useSelector((state) => state.course.currentCourseState);
  const { currentCourseIndex, currentChapterIndex, currentTopicIndex } = currCourseState;

  const { currentCourseData, setCurrentCourseData, updateCurrentCourseData } = useCourseContext();

  return (
    <div className={styles.headerWrapper}  >
      <div className={styles.topicHeaderInnerWrapper} >

        <div className={styles.backBtnIconWrapper} >
          <div className={styles.backBtnIconDiv} onClick={() => navigate(-1)}>
            <BackBtnIcon />
          </div>
        </div>

        <div className={styles.headingWrapper}>
          <p className={styles.headingText} >{coursesList[currentCourseIndex].chaptersList[currentChapterIndex].chapterName}</p>
        </div>

        <div className={styles.sideBarToggleIconWrapper}>
          <div className={styles.iconDiv} onClick={() => toggleSidebar(true)} >
            <SideBarShowIcon />
          </div>
        </div>

      </div>
    </div>

  )
}

export default TopicHeaderComponent;