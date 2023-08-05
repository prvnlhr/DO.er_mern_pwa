import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import styles from "./styles/courseChapterCardStyles.module.css"
import JavaScriptLogo from '../icons/JavaScriptLogo'
import TiltedArrowIcon from '../icons/TiltedArrowIcon'
import CourseModuleCardIcon from "../icons/CourseModuleCardIcon"
import BookmarkIconFilled from "../icons/BookmarkIconFilled"
import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"
import { setMarkDownFile } from "../helperFunctions/setMarkDownHelperFunction"


import { useSelector, useDispatch } from 'react-redux';
import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"


const CourseChapterCard = ({ chapterData, chapterIndex }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const currCourseState = useSelector((state) => state.course.currentCourseState);
  const { currentCourseIndex, currentChapterIndex, currentTopicIndex } = currCourseState || {};

  const moduleArrowLinkClicked = () => {

    // > 1.  set clicked module card index
    updateReduxState(dispatch, { data: { 'currentChapterIndex': chapterIndex } });

    //> 2. then -> navigate to topics page
    setMarkDownFile(dispatch, currentCourseIndex, chapterIndex, 0);

    //> 3. then -> navigate
    navigate("/user/topic")

  }


  return (
    <div className={styles.chapterOuterWrapper} >
      <div className={styles.chapterWrapper}>
        <div className={styles.moduleLogoWrapper} >
          <CourseModuleCardIcon />
        </div>
        <div className={styles.chapterTextWrapper} >
          <p className={styles.chapterText} >
            CHAPTER {chapterIndex + 1}
          </p>
        </div>
        <div className={styles.chapterTimeWrapper} >
          <p className={styles.chapterTimeText}  >{chapterData.time_required}</p>
        </div>
        <div className={styles.chapterBookmarkWrapper} >
          <BookmarkIconFilled />
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