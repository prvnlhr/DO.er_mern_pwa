import React from 'react'
import styles from "./styles/topicBodyComponentStyles.module.css"
import SideBarContentCompWrapper from './SideBarContentCompWrapper'
import ExploreComponent from './ExploreComponent'
import SideBarComponent from './SideBarComponent'
import MainComponent from './MainComponent'
const TopicBodyComponent = ({ showSideBar }) => {
  return (
    <div className={styles.bodyWrapper} >
      {/* <SideBarContentCompWrapper showSideBar={showSideBar} /> */}
      <SideBarComponent showSideBar={showSideBar} />
      <MainComponent showSideBar={showSideBar} />
      {/* <ExploreComponent /> */}
    </div>
  )
}

export default TopicBodyComponent