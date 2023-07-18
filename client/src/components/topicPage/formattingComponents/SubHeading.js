import React from 'react'
import styles from "./styles/subHeadingStyles.module.css"

const SubHeading = ({ subHeading }) => {
  return (
    <div className={styles.subHeadingWrapper}>
      <div className={styles.subHeadingIndicator} ></div>
      <p className={styles.subHeadingText} >{subHeading}</p>
    </div>
  )
}

export default SubHeading