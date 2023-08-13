import React from 'react'

import styles from "./styles/classroomPageStyles.module.css"
import ClassroomPageHeader from './ClassroomPageHeader'
import StatsComponent from './StatsComponent'
import ListComponent from './ListComponent'

const ClassroomPage = () => {
    return (
        <div className={styles.classroomPageStylesWrapper}>
            <ClassroomPageHeader />
            <div className={styles.classroomPageBodyWrapper} >
                <StatsComponent />
                <ListComponent />
            </div>
        </div>
    )
}

export default ClassroomPage