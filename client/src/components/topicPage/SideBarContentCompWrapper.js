import React, { useState } from 'react'
import styles from "./styles/sidebarContentCompWrapperStyles.module.css"
import SideBarComponent from "./SideBarComponent"
import ContentComponent from "./ContentComponent"
const SideBarContentCompWrapper = ({ showSideBar }) => {

    return (
        <div className={styles.wrapper} >
            <SideBarComponent showSideBar={showSideBar} />
            <ContentComponent showSideBar={showSideBar} />
        </div>
    )
}

export default SideBarContentCompWrapper