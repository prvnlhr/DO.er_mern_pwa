import React from 'react'
import styles from "./styles/mainComponentStyles.module.css"
import ExploreComponent from "./ExploreComponent"
import ContentComponent from "./ContentComponent"
const MainComponent = ({ showSideBar }) => {
    return (
        <div className={`${styles.mainWrapper} ${showSideBar && styles.mainWrapperSlide}`} >
            <ContentComponent />
            <ExploreComponent />
        </div>
    )
}

export default MainComponent