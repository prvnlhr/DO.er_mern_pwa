import React from 'react'
import styles from "./styles/commonHeaderStyles.module.css"
const CommonHeader = ({ headingText }) => {
    return (
        <div className={styles.commonHeaderWrapper} >
            <div className={styles.commonHeaderInnerWrapper} >
                <div className={styles.indicatorContainer} >
                    <div className={styles.indicatorDiv} ></div>
                </div>
                <div className={styles.headingTextContainer} >
                    <p>{headingText}</p>
                </div>
            </div>
        </div>
    )
}

export default CommonHeader