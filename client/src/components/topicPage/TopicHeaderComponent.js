import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"

import styles from "./styles/topicHeaderComponentStyles.module.css"
import BackBtnIcon from '../icons/BackBtnIcon';
const TopicHeaderComponent = ({ toggleSidebar }) => {

  const navigate = useNavigate();

  const { currentCourseData, setCurrentCourseData, updateCurrentCourseData } = useCourseContext();

  return (
    <div className={styles.headerWrapper}  >
      <div className={styles.backBtnIconWrapper} >
        <div className={styles.backBtnIconDiv} onClick={() => navigate(-1)}>
          <BackBtnIcon />
        </div>
      </div>
      <div className={styles.headingWrapper} onClick={toggleSidebar} >
        <p className={styles.headingText} >{coursesList[currentCourseData.currentCourseIndex].modulesList[currentCourseData.currentCourseModuleIndex].module_title}</p>
      </div>
    </div>
  )
}

export default TopicHeaderComponent;