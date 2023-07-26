import React from 'react'
import styles from "./styles/markdownCustomStyles.module.css"
const PrimaryTitle = ({ primaryTitle }) => {
  return (
    <div className={styles.primaryTitleWrapper}>
      <div className={styles.indicatorContainer}>
        <div className={styles.indicatorDiv} ></div>
      </div>
      <div className={styles.headingTextDiv} >
        <h1 className={styles.primaryTitleText}>
          {primaryTitle}
        </h1>
      </div>
    </div>
  )
}

export default PrimaryTitle