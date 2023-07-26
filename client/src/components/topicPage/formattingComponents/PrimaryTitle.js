import React from 'react'
import styles from "./styles/primaryTitleStyles.module.css"
const PrimaryTitle = ({ mainHeading }) => {
  return (
    <div className={styles.primaryTitleWrapper}>
      <div className={styles.indicatorContainer}>
        <div className={styles.indicatorDiv} ></div>
      </div>
      <div className={styles.headingTextDiv} >
        <p className={styles.primaryTitleText}>
          {mainHeading}
        </p>
      </div>
    </div>
  )
}

export default PrimaryTitle