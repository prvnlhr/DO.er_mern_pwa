import React from 'react'
import { useNavigate } from 'react-router-dom';
import BackBtnIcon from "../icons/BackBtnIcon"
import styles from "./styles/classroomPageHeaderStyles.module.css"

const ClassroomPageHeader = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.classroomPageHeaderWrapper} >
            <div className={styles.headerInnerWrapper} >
                <div className={styles.backBtnIconWrapper} >
                    <div className={styles.backBtnIconDiv} onClick={() => navigate(-1)}>
                        <BackBtnIcon />
                    </div>
                </div>

                <div className={styles.headingWrapper}>
                    <p className={styles.headingText} >My Classroom</p>
                </div>
            </div>
        </div>
    )
}

export default ClassroomPageHeader