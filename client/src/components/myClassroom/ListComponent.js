import React, { useEffect, useState } from 'react'
import styles from "./styles/listComponentStyles.module.css"
import InProgressCourseCard from './InProgressCourseCard'
import BookmarkCard from './BookmarkCard'
import { useSelector } from 'react-redux'
import { coursesList } from "../../courseData/courseData.js"
import AllCourseCardClassroom from './AllCourseCardClassroom'

const ListComponent = () => {

    const [showInProgressList, setShowInProgressList] = useState('inProgress');

    const [courseInfoArray, setCourseInfoArray] = useState([]);

    const courseState = useSelector((state) => state.course?.currentCourseState);
    const { completedCourses, completedChapters, bookmarkedChapters } = courseState;



    console.log(completedCourses);

    // Preprocess the course information and save it in useState
    useState(() => {
        const info = {};
        Object.entries(completedChapters).forEach(([courseIndex, chapters]) => {
            const numFalseChapters = Object.values(chapters).filter(value => value === false).length;
            info[courseIndex] = numFalseChapters;
        });
        setCourseInfoArray(info);
    }, []);

    const InProgressList = () => {
        return (
            <div className={styles.inProgressListWrapper}>
                <div className={styles.progressListHeaderWrapper} >
                    <div className={styles.indicatorWrapper} >
                        <div className={styles.indicatorDiv} ></div>
                    </div>
                    <div className={styles.headingWrapper} >
                        <div className={styles.headingDiv} onClick={() => setShowInProgressList('inProgress')} >
                            <p className={showInProgressList === 'inProgress' ? styles.headingTextActive : styles.headingTextNotActive} >In Progress</p>
                        </div>
                        <div className={styles.headingDiv} onClick={() => setShowInProgressList('allCourses')} >
                            <p className={showInProgressList === 'allCourses' ? styles.headingTextActive : styles.headingTextNotActive} >All courses</p>
                        </div>
                    </div>
                </div>

                <div className={styles.progressCardListOuterWrapper} >
                    <div className={showInProgressList === 'inProgress' ? styles.progressCardListInnerWrapper : styles.allCardListInnerWrapper} >
                        {
                            showInProgressList === 'inProgress' ?
                                <>

                                    {/* {
                                        Object.entries(completedCourses).map(([courseIndex, isCompleted]) => (
                                            <InProgressCourseCard courseIndex={courseIndex} numChapterCompleted={courseInfoArray[courseIndex]} totalChapters={coursesList[courseIndex].chaptersList.length} />
                                        ))
                                    } */}


                                    {/* <InProgressCourseCard  courseIndex={courseIndex} numChapterCompleted={courseInfoArray[courseIndex]} totalChapters={coursesList[courseIndex].chaptersList.length} /> */}
                                    <InProgressCourseCard />
                                    <InProgressCourseCard />
                                    <InProgressCourseCard />
                                    {/* <InProgressCourseCard /> */}
                                    {/* <InProgressCourseCard /> */}
                                    {/* <InProgressCourseCard /> */}
                                    {/* <InProgressCourseCard /> */}
                                </>
                                :
                                <>
                                    {
                                        coursesList.map((course, index) => (
                                            <>
                                                <AllCourseCardClassroom courseData={course} courseIndx={index} />
                                                <AllCourseCardClassroom courseData={course} courseIndx={index} />
                                                <AllCourseCardClassroom courseData={course} courseIndx={index} />
                                                <AllCourseCardClassroom courseData={course} courseIndx={index} />
                                                <AllCourseCardClassroom courseData={course} courseIndx={index} />
                                                <AllCourseCardClassroom courseData={course} courseIndx={index} />
                                                <AllCourseCardClassroom courseData={course} courseIndx={index} />
                                                <AllCourseCardClassroom courseData={course} courseIndx={index} />
                                                <AllCourseCardClassroom courseData={course} courseIndx={index} />
                                            </>
                                        ))
                                    }
                                </>
                        }

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
                            <p className={styles.headingTextBookmark} >Bookmarks</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bookmarkCardListOuterWrapper} >
                    <div className={styles.bookmarkCardListInnerWrapper} >
                        {Object.entries(bookmarkedChapters).map(([courseIndex, bookmarkedChaptersList]) => (
                            <>
                                {
                                    bookmarkedChaptersList.map((bookmarkChapterIndx, index) => (
                                        <BookmarkCard courseIndex={courseIndex} chapterIndex={bookmarkChapterIndx} courseData={coursesList[courseIndex]} chapterData={coursesList[courseIndex].chaptersList[bookmarkChapterIndx]} />
                                    ))
                                }
                            </>
                        ))}

                        {/* <BookmarkCard  courseData={courseList[courseIndex]} chapterData={courseList[courseIndex].chaptersList[bookmarkChapterIndx]}   /> */}
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