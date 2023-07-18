import React from 'react'
import styles from "./styles/courseModuleStyles.module.css"
import JavaScriptLogo from '../icons/JavaScriptLogo'
import TiltedArrowIcon from '../icons/TiltedArrowIcon'
import CourseModuleIcon from "../icons/CourseModuleIcon"
import BookmarkIconFilled from "../icons/BookmarkIconFilled"

const CourseModule = () => {


  let moduleTopicListData = [
    { topicName: "What is Closure ?" },
    { topicName: "Defining closure in JS" },
    { topicName: "Example of Closure" },
    { topicName: "Real world Usage" },
    { topicName: "Currying" },
    { topicName: "Data Abstraction using Closure" },
  ]

  return (
    <div className={styles.moduleOuterWrapper} >
      <div className={styles.moduleWrapper}>
        <div className={styles.moduleLogoWrapper} >
          <CourseModuleIcon />
        </div>
        <div className={styles.moduleTextWrapper} >
          <p className={styles.moduleText} >MODULE 1</p>
        </div>
        <div className={styles.moduleTimeWrapper} >
          <p className={styles.moduleTimeText}  >20 min</p>
        </div>
        <div className={styles.moduleBookmarkWrapper} >
          <BookmarkIconFilled />
        </div>
        <div className={styles.moduleTopicNameWrapper} >
          <p className={styles.moduleTopicNameText}  >Closure in JS</p>
        </div>
        <div className={styles.moduleTopicListWrapper} >
          <div className={styles.topicListContainer} >


            {moduleTopicListData.map((data, index) => (
              <div className={styles.topicElementContainer} >

                <div className={styles.topicElementIndicatorDiv}></div>

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
        <div className={styles.moduleArrowLinkWrapper} >
          <div className={styles.tiltedIconDiv}>
            <TiltedArrowIcon />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CourseModule