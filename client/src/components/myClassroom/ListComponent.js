import React, { useEffect, useState } from 'react'
import styles from "./styles/listComponentStyles.module.css";
import LastOpenTopicCard from "./LastOpenTopicCard";
import BookmarkCard from "./BookmarkCard";
import InProgressCard from "./InProgressCard"

import { useSelector } from 'react-redux'
import { coursesList } from "../../courseData/courseData.js"

const ListComponent = () => {

    const [currListShow, setCurrListShow] = useState('INPROGRESS')

    const [courseInfoArray, setCourseInfoArray] = useState([]);

    const courseState = useSelector((state) => state.course?.currentCourseState);
    const { completedCourses, completedChapters, bookmarkedChapters, lastOpenedTopics } = courseState;

    useEffect(() => {
        const info = {};
        Object.entries(completedChapters).forEach(([courseIndex, chapters]) => {
            const numFalseChapters = Object.values(chapters).filter(value => value === true).length;
            info[courseIndex] = numFalseChapters;
        });
        console.log(info);
        setCourseInfoArray(info);
    }, [completedChapters]);


    const HeadingComponent = ({ headingText }) => {
        return (
            <div className={styles.headingComponentWrapper} >
                <div className={styles.headingComponentInnerWrapper} >
                    <div className={styles.indicatorContainer} >
                        <div className={styles.indicatorDiv} ></div>
                    </div>
                    <div className={`${styles.headingTextContainer} `} onClick={() => setCurrListShow('INPROGRESS')} >
                        <p>{headingText}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.listComponentWrapper}>
            <div className={styles.listComponentInnerWrapper}>
                <div className={styles.lastOpenListCell}>
                    <div className={styles.lastOpenListHeadingCell}>
                        <HeadingComponent headingText={'In Progress'} />
                        <div className={styles.headingSeperatorDiv} ></div>
                        <div className={`${styles.headingTextContainer} ${styles.allCourseHeadingTextContainer}`} onClick={() => setCurrListShow('LASTOPENED')} >
                            <p>Last Opened</p>
                        </div>
                    </div>

                    {
                        currListShow === 'INPROGRESS' ?
                            <div className={styles.inProgressMainListCell}>
                                {Object.keys(courseInfoArray).map(courseIndex => (
                                    <InProgressCard
                                        key={courseIndex}
                                        courseIndex={courseIndex}
                                        numCompletedChapters={courseInfoArray[courseIndex]}
                                        totalChapters={coursesList[courseIndex].chaptersList.length}
                                    />
                                ))}
                            </div>
                            :
                            <div className={styles.lastOpenMainListCell}>
                                {lastOpenedTopics.map((lastOpenTopicData) => (
                                    <LastOpenTopicCard lastOpenTopicData={lastOpenTopicData} />
                                ))}
                            </div>
                    }
                </div>
                <div className={styles.bookmarksListCell}>
                    <div className={styles.bookmarksListHeadingCell}>
                        <HeadingComponent headingText={'Bookmarks'} />
                    </div>
                    <div className={styles.bookmarksMainListCell}>
                        {Object.entries(bookmarkedChapters).map(([courseIndex, bookmarkedChaptersList]) => (
                            <>
                                {
                                    bookmarkedChaptersList.map((bookmarkChapterIndx, index) => (
                                        <BookmarkCard courseIndex={courseIndex} chapterIndex={bookmarkChapterIndx} courseData={coursesList[courseIndex]} chapterData={coursesList[courseIndex].chaptersList[bookmarkChapterIndx]} />
                                    ))
                                }
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListComponent;


