import React from 'react'
import styles from "./styles/searchPageHeaderStyles.module.css"
import { useNavigate } from 'react-router-dom';
import { useCourseContext } from '../../appState/appContext';
import BackBtnIcon from "../icons/BackBtnIcon"
import { coursesList } from "../../courseData/courseData.js"
const SearchPageHeader = () => {
    const navigate = useNavigate();
    const { currentCourseData } = useCourseContext();
    return (

        <div className={styles.searchPageHeaderWrapper} >
            <div className={styles.searchHeaderInnerWrapper} >
                <div className={styles.backBtnIconWrapper} >
                    <div className={styles.backBtnIconDiv} onClick={() => navigate(-1)}>
                        <BackBtnIcon />
                    </div>
                </div>

                <div className={styles.headingWrapper}>
                    <p className={styles.headingText} >Search results</p>
                </div>
            </div>
        </div>

    )
}

export default SearchPageHeader