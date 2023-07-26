import React from 'react'
import styles from "./styles/markdownCustomStyles.module.css"
const SecondaryTitle = ({ secondaryTitle }) => {
    return (
        <div className={styles.primaryTitleWrapper}>
            <div className={styles.indicatorContainer}>
                <div className={styles.indicatorDiv} ></div>
            </div>
            <div className={styles.headingTextDiv} >
                <h2 className={styles.secondaryTitleText}>
                    {secondaryTitle}
                </h2>
            </div>
        </div>
    )
}

export default SecondaryTitle