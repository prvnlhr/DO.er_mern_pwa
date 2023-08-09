import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import styles from "./styles/courseChapterCardStyles.module.css"
import JavaScriptLogo from '../icons/JavaScriptLogo'
import TiltedArrowIcon from '../icons/TiltedArrowIcon'
import CourseModuleCardIcon from "../icons/CourseModuleCardIcon"
import BookmarkIconFilled from "../icons/BookmarkIconFilled"
import BookmarkIcon from "../icons/BookmarkIcon"
import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"
import { setMarkDownFile } from "../helperFunctions/setMarkDownHelperFunction"

import { bookmarkCourseAsync } from "../../redux/features/course/courseSlice"


import { useSelector, useDispatch } from 'react-redux';
import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"
import Spinner from '../icons/Spinner'


const CourseChapterCard = ({ chapterData, chapterIndex, currChapterShowSpinnerIndex, setCurrChapterShowSpinnerIndex }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();




  const currCourseState = useSelector((state) => state.course.currentCourseState);
  const authState = useSelector((state) => state.auth);

  const { userId, accessToken } = authState;

  const { isLoading, currentCourseIndex, bookmarkedChapters, currentChapterIndex, currentTopicIndex } = currCourseState || {};



  const moduleArrowLinkClicked = () => {

    // > 1.  set clicked module card index
    updateReduxState(dispatch, { data: { 'currentChapterIndex': chapterIndex } });

    //> 2. then -> navigate to topics page
    setMarkDownFile(dispatch, currentCourseIndex, chapterIndex, 0);

    //> 3. then -> navigate
    navigate("/user/topic")

  }


  const handleBookmarkIconClicked = () => {

    setCurrChapterShowSpinnerIndex(chapterIndex);
    dispatch(bookmarkCourseAsync({
      accessToken: accessToken,
      courseIndx: currentCourseIndex,
      chapterIndx: chapterIndex
    }));
  }


  return (
    <div className={styles.chapterOuterWrapper} >
      <div className={styles.chapterWrapper}>
        <div className={styles.moduleLogoWrapper} >
          <div className={styles.moduleLogoIconDiv} >
            <CourseModuleCardIcon />
          </div>
        </div>
        <div className={styles.chapterTextWrapper} >
          <p className={styles.chapterText} >
            CHAPTER {chapterIndex + 1}
          </p>
        </div>
        <div className={styles.chapterTimeWrapper} >
          <p className={styles.chapterTimeText}  >{chapterData.time_required}</p>
        </div>

        <div className={styles.chapterBookmarkWrapper}>
          {accessToken &&
            <>
              {
                (isLoading && chapterIndex === currChapterShowSpinnerIndex) ?
                  <div className={styles.bookmarkSpinnerDiv} >
                    <Spinner />
                  </div>
                  :
                  <div className={styles.bookmarkIconDiv} onClick={handleBookmarkIconClicked}  >
                    {
                      bookmarkedChapters && bookmarkedChapters[currentCourseIndex] && bookmarkedChapters[currentCourseIndex].includes(chapterIndex)
                        ?
                        <BookmarkIconFilled />
                        :
                        <BookmarkIcon />
                    }
                  </div>
              }
            </>
          }

        </div>
        <div className={styles.chapterTopicNameWrapper} >
          <p className={styles.chapterTopicNameText}  >{chapterData.chapterName}</p>
        </div>
        <div className={styles.chaptersTopicListWrapper} >
          <div className={styles.topicListContainer} >

            {chapterData.topicsList.map((data, index) => (
              <div className={styles.topicElementContainer} key={index} >

                <div className={styles.topicElementIndicatorContainer}>
                  <div className={styles.topicElementIndicatorDiv}></div>
                </div>

                <div className={styles.topicElementTextDiv}>
                  <p className={styles.topicElementNameText}>
                    {data.topicName}
                  </p>
                </div>

              </div>
            ))

            }

          </div>
        </div>
        <div className={styles.chapterArrowLinkWrapper} >
          <div className={styles.tiltedIconDiv} onClick={moduleArrowLinkClicked}>
            <TiltedArrowIcon />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CourseChapterCard