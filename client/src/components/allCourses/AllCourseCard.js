import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from "./styles/allCourseCard.module.css"
import JavaScriptLogo from "../icons/JavaScriptLogo"
import TiltedArrowIcon from "../icons/TiltedArrowIcon"
import CourseChapterIcon from "../icons/CourseChapterIcon"
import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"
import { updateCourseState } from "../../redux/features/course/courseSlice"
import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"

import { useSelector, useDispatch } from 'react-redux';

const AllCourseCard = ({ courseData, courseIndx }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const courseArrowlinkedHandleClick = () => {

        // first -> 1. set clicked course index
        updateReduxState(dispatch,
            {
                data: {
                    'currentCourseIndex': courseIndx
                }
            }
        )

        // then --> 2. navigate to course page
        navigate("/user/course")
    }
    return (
        <div className={styles.cardOuterWrapper}>

            <div className={styles.cardWrapper} >
                <div className={styles.courseLogoWrapper} >
                    {courseData.courseLogo.logo}
                </div>
                <div className={styles.courseClickArrowWrapper} >

                    <div className={styles.arrowLinkDiv} onClick={courseArrowlinkedHandleClick}>
                        <TiltedArrowIcon />
                    </div>
                </div>
                <div className={styles.courseNameWrapper} >
                    <p className={styles.courseNameText} >{courseData.courseName}</p>
                </div>
                <div className={styles.courseDescriptionWrapper} >
                    <p className={styles.courseDesText} >
                        {courseData.courseDescription}
                    </p>
                </div>
                <div className={styles.numModulesWrapper} >
                    <div className={styles.numModuleIconContainer}  >
                        <div className={styles.numModuleIconDiv} >
                            <CourseChapterIcon />
                        </div>
                    </div>
                    <div className={styles.numModuleTextContainer}  >
                        <p>{coursesList[courseIndx].chaptersList.length} <span className={styles.moduleSpanText}>CHAPTERS</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCourseCard;