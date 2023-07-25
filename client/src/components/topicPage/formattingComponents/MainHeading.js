import React from 'react'
import styles from "./styles/mainHeadingStyles.module.css"
const MainHeading = ({ mainHeading }) => {
  return (
    <div className={styles.mainHeadingWrapper}>
      <div className={styles.indicatorContainer}>
        <div className={styles.indicatorDiv} ></div>
      </div>
      <div className={styles.headingTextDiv} >
        <p className={styles.mainHeadingText}>
          {mainHeading}
        </p>
      </div>
    </div>
  )
}

export default MainHeading