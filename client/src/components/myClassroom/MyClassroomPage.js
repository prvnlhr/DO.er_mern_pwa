import React from 'react'

import styles from "./styles/classroomPageStyles.module.css"
import ClassroomHeader from "./ClassroomPageHeader"
import ClassroomPageHeader from './ClassroomPageHeader'
import StatsComponent from './StatsComponent'
import GraphHeaderComponent from './GraphHeaderComponent'
import GraphComponent from './GraphComponent'
import ListComponent from './ListComponent'
import SubHeader from './SubHeader'
const MyClassroomPage = () => {
    return (
        <div className={styles.classroomPageStylesWrapper}>
            <ClassroomPageHeader />
            <div className={styles.classroomPageBodyWrapper} >
                <SubHeader />
                <ListComponent />
            </div>
        </div>
    )
}

export default MyClassroomPage