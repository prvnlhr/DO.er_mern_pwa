import React from 'react';
import styles from "./styles/inprogressCardStyles.module.css";
import JavaScriptLogo from "../icons/courseLogos/JavaScriptLogo";
import TiltedArrowIcon from '../icons/TiltedArrowIcon';
import { coursesList } from "../../courseData/courseData";


const InProgressCourseCard = ({ courseIndex, numChapterCompleted, totalChapters }) => {

    const LinkArrowIcon = () => {
        return (
            <svg
                style={{ width: '40%' }}
                // width="34" height="34"
                viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.05664 30.2394L29.8609 3.75439M29.8609 3.75439V29.18M29.8609 3.75439H5.08881" stroke="white" stroke-width="2.97742" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


        )
    }

    const ChevronIcon = () => {
        return (
            <svg
                style={{ width: '100%' }}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_536_383)">
                    <path d="M5.04883 16.6969L12.6287 9.117L5.04883 1.53711" stroke="#51637D" stroke-width="1.9143" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_536_383">
                        <rect width="17" height="17" fill="white" transform="translate(0.339844 0.616943)" />
                    </clipPath>
                </defs>
            </svg>
        )

    }
    const BreadCrumElement = ({ text, txtColor, fontWt }) => {
        return (
            <div className={styles.breadCrumElementWrapper} >
                <div className={styles.breadCrumTextContainer} ><p style={{ color: `${txtColor}`, fontWeight: `${fontWt}` }} >{text}</p></div>
                <div className={styles.breadCrumIconContainer} >
                    <div className={styles.chevIconDiv} >
                        <ChevronIcon />
                    </div>
                </div>
            </div>
        )
    }




    return (
        <div className={styles.cardOuterWrapper}>

            <div className={styles.cardInnerWrapper} >
                <div className={styles.leftSide} >
                    <div className={styles.courseAttributeCell} >
                        <p>COURSE</p>
                    </div>
                    <div className={styles.courseNameCell} >
                        <p>{coursesList[courseIndex]?.courseName}</p>
                    </div>
                    <div className={styles.numChaptersCell} >
                        <p>{totalChapters}</p>
                    </div>
                    <div className={styles.chapterAttributeCell} >
                        <p>Chapters</p>
                    </div>
                </div>

                <div className={styles.rightSideOuterWrapper} >

                    <div className={styles.rigthSide} >
                        <div className={styles.breadCrumCell} >
                            <BreadCrumElement text={'Last Milestone'} txtColor={'#51637D'} fontWt={400} />
                            <BreadCrumElement text={'CHAPTER 4'} txtColor={'#6167A0'} fontWt={500} />
                        </div>
                        <div className={styles.chapterNameCell} >
                            <div className={styles.chapterNameDiv} >
                                <p>Closures & Callbacks in JS</p>
                            </div>
                        </div>
                        <div className={styles.chapterProgressCell} >
                            <div className={styles.progressAttributeContainer} >
                                <p>Chapters completed</p>
                            </div>
                            <div className={styles.progressBarWrapper} >
                                <div className={styles.barWrapper} >
                                    <div className={styles.barContainer} >
                                        <div className={styles.barDiv}
                                            style={{ width: `${(numChapterCompleted / totalChapters) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className={styles.completedNumContainer} >
                                    <div className={styles.numDiv} ><p>{numChapterCompleted}</p></div>
                                    <div className={styles.numDiv} ><p className={styles.slashText} >/</p></div>
                                    <div className={styles.numDiv} ><p>{totalChapters}</p></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.linkButtonCell} >
                            <div className={styles.linkBtnDiv} >
                                <LinkArrowIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default InProgressCourseCard