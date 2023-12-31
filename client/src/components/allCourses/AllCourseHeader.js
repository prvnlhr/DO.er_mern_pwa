import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from "./styles/allCourseHeaderStyle.module.css"
import BackBtnIcon from "../icons/BackBtnIcon"

const AllCourseHeader = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.allCourseHeaderWrapper} >
            <div className={styles.headerInnerWrapper} >
                <div className={styles.backBtnIconWrapper} >
                    <div className={styles.backBtnIconDiv} onClick={() => navigate(-1)}>
                        <BackBtnIcon />
                    </div>
                </div>
                <div className={styles.headingWrapper}>
                    <p className={styles.headingText} >Explore all courses</p>
                </div>
            </div>
        </div>


    )
}

export default AllCourseHeader