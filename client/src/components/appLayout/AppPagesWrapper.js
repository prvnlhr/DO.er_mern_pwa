import React from 'react'
import styles from "./styles/appPageWrapperStyles.module.css"
import MyClassroomPage from '../myClassroom/MyClassroomPage';

const AppPagesWrapper = () => {
    return (
        <div className={styles.appPageWrapperStyles}>
            <MyClassroomPage />
        </div>
    )
}

export default AppPagesWrapper;