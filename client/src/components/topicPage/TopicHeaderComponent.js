import React from 'react'
import styles from "./styles/topicHeaderComponentStyles.module.css"
import BackBtnIcon from '../icons/BackBtnIcon';
const TopicHeaderComponent = ({ toggleSidebar }) => {
  return (
    <div className={styles.headerWrapper}  >
      <div className={styles.backBtnIconWrapper} >
        <BackBtnIcon />
      </div>
      <div className={styles.headingWrapper} onClick={toggleSidebar} >
        <p className={styles.headingText} >Intro to JavaScript</p>
      </div>
    </div>
  )
}

export default TopicHeaderComponent;