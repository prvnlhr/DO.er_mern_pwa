import React, { useState } from 'react'
import styles from "./styles/topicPageStyles.module.css"
import TopicHeaderComponent from "./TopicHeaderComponent"
import TopicBodyComponent from "./TopicBodyComponent"
const TopicsPage = () => {
    const [showSideBar, setShowSideBar] = useState(false);


    const toggleSidebar = () => {
        setShowSideBar(!showSideBar);
    }

    return (
        <div className={styles.topicPageWrapper} >
            <TopicHeaderComponent toggleSidebar={toggleSidebar} />
            <TopicBodyComponent showSideBar={showSideBar}  />
        </div>
    )
}

export default TopicsPage;