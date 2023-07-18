import React from 'react'
import styles from "./styles/subTextBlockStyles.module.css"
const SubTextBlock = ({ subTextContent }) => {
    return (
        <div className={styles.subTextWrapper}>
            <p className={styles.subTextStyles}>
                {subTextContent}
            </p>
        </div>
    )
}

export default SubTextBlock