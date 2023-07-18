import React from 'react'
import styles from "./styles/mainHeadingStyles.module.css"
const MainHeading = ({ mainHeading }) => {
  return (
    <div className={styles.mainHeadingWrapper}>
      <div className={styles.mainHeadingIndicator} ></div>
      <p className={styles.mainHeadingText} >{mainHeading}</p>
    </div>
  )
}

export default MainHeading