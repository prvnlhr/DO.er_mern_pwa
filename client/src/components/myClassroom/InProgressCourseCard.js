import React from 'react'
import styles from "./styles/inprogressCardStyles.module.css"
import JavaScriptLogo from "../icons/courseLogos/JavaScriptLogo"
import TiltedArrowIcon from '../icons/TiltedArrowIcon'



const InProgressCourseCard = () => {
    return (
        <div className={styles.cardOuterWrapper}>

            <div className={styles.cardWrapper} >
                <div className={styles.courseLogoWrapper} >
                    <div className={styles.courseLogoDiv} >
                        <JavaScriptLogo />
                    </div>
                </div>
                <div className={styles.courseClickArrowWrapper} >

                    <div className={styles.arrowLinkDiv} >
                        <TiltedArrowIcon />
                    </div>
                </div>
                <div className={styles.courseNameWrapper} >
                    <p className={styles.courseNameText} >JavaScript</p>
                </div>

                <div className={styles.chapterTextWrapper} >
                    <p className={styles.chapterText} >
                        Chapter completed
                    </p>
                </div>

                <div className={styles.chapterContentWrapper}>
                    <div className={styles.chapterPercentTextWrapper} >
                        <p className={styles.chapterPercText} >
                            80%
                        </p>
                    </div>

                    <div className={styles.chapterBarWrapper}>
                        <div className={styles.chapterBarContainer} >
                            <div className={styles.chapterBarDiv} ></div>
                        </div>
                    </div>

                    <div className={styles.chapterCompletedNumWrapper} >
                        <p className={styles.chapterComNumText} >
                            12/24
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InProgressCourseCard