import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import styles from "./styles/courseModuleCardStyles.module.css"
import JavaScriptLogo from '../icons/JavaScriptLogo'
import TiltedArrowIcon from '../icons/TiltedArrowIcon'
import CourseModuleCardIcon from "../icons/CourseModuleCardIcon"
import BookmarkIconFilled from "../icons/BookmarkIconFilled"
import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"
import { setMarkDownFile } from "../utilityFunctions/getMarkdownUtilityFunction"


const CourseModuleCard = ({ moduleData, moduleIndex }) => {

  const navigate = useNavigate();
  const { currentCourseData, updateCurrentCourseData } = useCourseContext();
  const { currentCourseIndex, currentCourseModuleIndex, currentCourseTopicIndex } = currentCourseData;


  const moduleArrowLinkClicked = () => {

    // 1. set clicked module card index
    updateCurrentCourseData('currentCourseModuleIndex', moduleIndex);


    // 2. then -> navigate to topics page
    setMarkDownFile(currentCourseIndex, moduleIndex, 0, updateCurrentCourseData);

    // 3. then -> navigate
    navigate("/user/topic")

  }


  return (
    <div className={styles.moduleOuterWrapper} >
      <div className={styles.moduleWrapper}>
        <div className={styles.moduleLogoWrapper} >
          <CourseModuleCardIcon />
        </div>
        <div className={styles.moduleTextWrapper} >
          <p className={styles.moduleText} >
            CHAPTER {moduleIndex + 1}
          </p>
        </div>
        <div className={styles.moduleTimeWrapper} >
          <p className={styles.moduleTimeText}  >{moduleData.time_required}</p>
        </div>
        <div className={styles.moduleBookmarkWrapper} >
          <BookmarkIconFilled />
        </div>
        <div className={styles.moduleTopicNameWrapper} >
          <p className={styles.moduleTopicNameText}  >{moduleData.module_title}</p>
        </div>
        <div className={styles.moduleTopicListWrapper} >
          <div className={styles.topicListContainer} >

            {moduleData.topicsList.map((data, index) => (
              <div className={styles.topicElementContainer} >

                <div className={styles.topicElementIndicatorContainer}>
                  <div className={styles.topicElementIndicatorDiv}></div>
                </div>

                <div className={styles.topicElementTextDiv}>
                  <p className={styles.topicElementNameText}>
                    {data.topic_name}
                  </p>
                </div>

              </div>
            ))

            }

          </div>
        </div>
        <div className={styles.moduleArrowLinkWrapper} >
          <div className={styles.tiltedIconDiv} onClick={moduleArrowLinkClicked}>
            <TiltedArrowIcon />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CourseModuleCard