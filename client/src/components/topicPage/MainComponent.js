import React from 'react'
import styles from "./styles/mainComponentStyles.module.css"
import ExploreComponent from "./ExploreComponent"
import ContentComponent from "./ContentComponent"
const MainComponent = ({ showSideBar, toggleSidebar }) => {

    return (
        <div className={`${styles.mainWrapper} ${showSideBar && styles.mainWrapperSlide}`} >
            <ContentComponent toggleSidebar={toggleSidebar} />
            {/* <ExploreComponent /> */}
        </div>
    )
}

export default MainComponent