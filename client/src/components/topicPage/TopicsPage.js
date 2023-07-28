import React, { useState } from 'react'
import styles from "./styles/topicPageStyles.module.css"
import TopicHeaderComponent from "./TopicHeaderComponent"
import TopicBodyComponent from "./TopicBodyComponent"
const TopicsPage = () => {

    const [showSideBar, setShowSideBar] = useState(false);

    const toggleSidebar = (val) => {
        setShowSideBar(!showSideBar);
    }

    return (
        <div className={styles.topicPageWrapper} >
            <TopicHeaderComponent showSideBar={showSideBar} toggleSidebar={toggleSidebar} />
            <TopicBodyComponent showSideBar={showSideBar} toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default TopicsPage;