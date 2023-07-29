import React from 'react'
import styles from "./styles/searchItemCardStyles.module.css"
import TiltedArrowIcon from "../../icons/TiltedArrowIcon"
import ChevronIcon from "../../icons/ChevronIcon"
import ClockIconLined from "./ClockIconLined"
import DocIconLined from "./DocIconLined"
const SearchCourseCard = () => {
    return (
        <div className={styles.searchItemWrapper} >
            <div className={styles.searchItemInnerWrapper}>
                <div className={styles.breadcrumWrapper} >
                    <div className={styles.courseNameContainer} >
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.chevronContainer} >
                        <div className={styles.chevronIconDiv} >
                            <ChevronIcon />
                        </div>
                    </div>
                    <div className={styles.chapterNameContainer} >
                        <p>Introduction to JS </p>
                    </div>
                </div>
                <div className={styles.searchKeyWordWrapper} >
                    <div className={styles.searchKeyContainer} >
                        <p>Topics</p>
                    </div>
                    <div className={styles.chevronContainer} >
                        <div className={styles.chevronIconDiv} >
                            <ChevronIcon />
                        </div>
                    </div>
                    <div className={styles.searchValueContainer} >
                        <div className={styles.searchValueInnerContainer} >
                            <p>What is JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className={styles.searchInfoEleWrapper} >
                    <div className={styles.infoEleContainer} >
                        <div className={styles.infoIconContainer} >
                            <div className={styles.infoIconDiv} >
                                <ClockIconLined />
                            </div>
                        </div>
                        <div className={styles.infoTextContainer} >
                            <p>12 min.</p>
                        </div>
                    </div>
                    <div className={styles.infoEleContainer} >
                        <div className={styles.infoIconContainer} >
                            <div className={styles.infoIconDiv} >
                                <DocIconLined />
                            </div>
                        </div>
                        <div className={styles.infoTextContainer} >
                            <p>11 Chapters</p>
                        </div>
                    </div>
                </div>
                <div className={styles.arrowLinkWrapper} >
                    <div className={styles.arrowLinkIconContainer} >
                        <TiltedArrowIcon />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default SearchCourseCard