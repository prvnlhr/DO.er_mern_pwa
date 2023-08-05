import React from 'react'
import styles from "./styles/listComponentStyles.module.css"
import InProgressCourseCard from './InProgressCourseCard'
import BookmarkCard from './BookmarkCard'
import { useSelector } from 'react-redux'

const ListComponent = () => {


    const InProgressList = () => {
        return (
            <div className={styles.inProgressListWrapper}>
                <div className={styles.progressListHeaderWrapper} >
                    <div className={styles.indicatorWrapper} >
                        <div className={styles.indicatorDiv} ></div>
                    </div>
                    <div className={styles.headingWrapper} >
                        <div className={styles.headingDiv} >
                            <p className={styles.headingText} >In Progress</p>
                        </div>
                        <div className={styles.headingDiv} >
                            <p className={styles.allCoursesHeadingText} >All courses</p>
                        </div>
                    </div>
                </div>

                <div className={styles.progressCardListOuterWrapper} >
                    <div className={styles.progressCardListInnerWrapper} >
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                        <InProgressCourseCard />
                    </div>
                </div>
            </div>
        )
    }

    const BookMarksList = () => {
        return (
            <div className={styles.bookmarkListWrapper} >
                <div className={styles.bookMarkListHeaderWrapper} >
                    <div className={styles.indicatorWrapper} >
                        <div className={styles.indicatorDiv} ></div>
                    </div>
                    <div className={styles.headingWrapper} >
                        <div className={styles.headingDiv} >
                            <p className={styles.headingText} >Bookmarks</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bookmarkCardListOuterWrapper} >
                    <div className={styles.bookmarkCardListInnerWrapper} >
                        <BookmarkCard />
                        <BookmarkCard />
                        <BookmarkCard />
                        <BookmarkCard />
                        <BookmarkCard />
                        <BookmarkCard />
                        <BookmarkCard />
                    </div>
                </div>
            </div>

        )
    }


    return (
        <div className={styles.listWrapper} >
            <div className={styles.listInnerWrapper} >
                <InProgressList />
                <BookMarksList />
            </div>
        </div>
    )
}

export default ListComponent