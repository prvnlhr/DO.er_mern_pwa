import React, { useState } from 'react'
import styles from "./styles/topicPageStyles.module.css"
import TopicHeaderComponent from "./TopicHeaderComponent"
import TopicBodyComponent from "./TopicBodyComponent"
const TopicsPage = () => {



    return (
        <div className={styles.topicPageWrapper} >
            <TopicHeaderComponent />
            <TopicBodyComponent />
        </div>
    )
}

export default TopicsPage;