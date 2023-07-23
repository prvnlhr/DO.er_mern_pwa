import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from "./styles/allCourseHeaderStyle.module.css"
import BackBtnIcon from "../icons/BackBtnIcon"

const AllCourseHeader = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.pageHeaderWrapper} >

            <div className={styles.headerInnerWrapper} >

                <div className={styles.headerHeadingWrapper} >
                    <div className={styles.backBtnContainer} >
                        <div className={styles.backBtnDiv} onClick={() => navigate(-1)} >
                            <BackBtnIcon />
                        </div>
                    </div>
                    <div className={styles.headingContainer} >
                        <p>Explore all courses</p>
                    </div>
                </div>
                <div className={styles.descWrapper} >
                    <p>Explore wide range of tutorials ranging from Web Development, Programming and Computer fundamentals. </p>
                </div>

            </div>
        </div>

    )
}

export default AllCourseHeader