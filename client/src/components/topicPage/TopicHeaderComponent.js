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


  return (
    <div className={styles.headerWrapper}  >
      <div className={styles.topicHeaderInnerWrapper} >

        <div></div>

      </div>
    </div>

  )
}

export default TopicHeaderComponent;