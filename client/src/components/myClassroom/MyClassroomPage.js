import React from 'react'

import styles from "./styles/classroomPageStyles.module.css"
import ClassroomHeader from "./ClassroomHeader"
import ClassroomContentWrapper from "./ClassroomContentWrapper"
const MyClassroomPage = () => {
    return (
        <div className={styles.classroomPageStylesWrapper} >
            <ClassroomHeader />
            <ClassroomContentWrapper />
        </div>
    )
}

export default MyClassroomPage