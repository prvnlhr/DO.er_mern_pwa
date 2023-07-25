import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from "./styles/allCourseCard.module.css"
import JavaScriptLogo from "../icons/JavaScriptLogo"
import TiltedArrowIcon from "../icons/TiltedArrowIcon"
import CourseChapterIcon from "../icons/CourseChapterIcon"
import { useCourseContext } from "../../appState/appContext"

const AllCourseCard = ({ courseData, courseIndx }) => {
    const navigate = useNavigate();

    const {
        currentCourseData,
        setCurrentCourseData,
        updateCurrentCourseData
    } = useCourseContext();

    const setClickedCourseIndex = () => {
        updateCurrentCourseData('currentCourseIndex', courseIndx)
    }
    const courseArrowlinkedHandleClick = () => {
        setClickedCourseIndex();
        navigate("/user/course")
    }
    return (
        <div className={styles.cardOuterWrapper}>

            <div className={styles.cardWrapper} >
                <div className={styles.courseLogoWrapper} >
                    <JavaScriptLogo />
                </div>
                <div className={styles.courseClickArrowWrapper} >

                    <div className={styles.arrowLinkDiv} onClick={courseArrowlinkedHandleClick}>
                        <TiltedArrowIcon />
                    </div>
                </div>
                <div className={styles.courseNameWrapper} >
                    <p className={styles.courseNameText} >{courseData.title}</p>
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
                        <p>12  <span className={styles.moduleSpanText}>Modules</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCourseCard;