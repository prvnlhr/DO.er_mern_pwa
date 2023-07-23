import React from 'react'

import styles from "./styles/classroomPageStyles.module.css"
import ClassroomHeader from "./ClassroomHeader"
import ClassroomBody from "./ClassroomBody"
const MyClassroomPage = () => {
    return (
        <div className={styles.classroomPageStylesWrapper} >
            <ClassroomHeader />
            <ClassroomBody />
        </div>
    )
}

export default MyClassroomPage