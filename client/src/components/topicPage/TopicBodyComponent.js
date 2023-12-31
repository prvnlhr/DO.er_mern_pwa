import React, { useState } from 'react'
import styles from "./styles/topicBodyComponentStyles.module.css"
import SideBarContentCompWrapper from './SideBarContentCompWrapper'
import ExploreComponent from './ExploreComponent'
import SideBarComponent from './SideBarComponent'
import MainComponent from './MainComponent'

const TopicBodyComponent = ({ showSideBar, toggleSidebar }) => {

  return (
    <div className={styles.bodyWrapper} >
      <SideBarComponent showSideBar={showSideBar} toggleSidebar={toggleSidebar} />
      <MainComponent showSideBar={showSideBar} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default TopicBodyComponent