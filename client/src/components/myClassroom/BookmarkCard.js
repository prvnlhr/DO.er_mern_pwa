import React from 'react'
import styles from "./styles/bookmarkCardStyles.module.css"
import ChevronIcon from "../icons/ChevronIcon"
import TiltedArrowIcon from '../icons/TiltedArrowIcon'
const BookmarkCard = () => {
    return (
        <div className={styles.bookmarkCardOuterwrapper} >
            <div className={styles.bookmarkCardInnerwrapper} >
                <div className={styles.courseNameBreadCrumWrapper} >
                    <div className={styles.breadCrumElementWrapper} >
                        <div className={styles.courseNameWrapper} >
                            <p>JavaScript</p>
                        </div>
                        <div className={styles.chevronIconWrapper} >
                            <div className={styles.chevronIconDiv} >
                                <ChevronIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.chapterNameWrapper} >
                    <p>Control Flow in JS</p>
                </div>
                <div className={styles.topicsCountWrapper} >
                    <p> 7 Topics</p>
                </div>
                <div className={styles.arrowLinkWrapper} >
                    <div className={styles.arrowLinkIconDiv} >
                        <TiltedArrowIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookmarkCard