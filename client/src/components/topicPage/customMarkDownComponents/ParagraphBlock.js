import React from 'react'
import styles from "./styles/markdownCustomStyles.module.css"

const ParagraphBlock = ({ textContent }) => {
    return (
        <div className={styles.paraWrapper}>
            <p className={styles.textStyles}>
                {textContent}
            </p>
        </div>
    )
}

export default ParagraphBlock