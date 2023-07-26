import React from 'react'
import styles from "./styles/subParagraphBlockStyles.module.css"
const SubParagraphBlock = ({ subTextContent }) => {
    return (
        <div className={styles.subTextWrapper}>
            <p className={styles.subTextStyles}>
                {subTextContent}
            </p>
        </div>
    )
}

export default SubParagraphBlock