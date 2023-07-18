import React from 'react'
import styles from "./styles/textBlockStyles.module.css"

const TextBlock = ({ textContent }) => {
    return (
        <div className={styles.textWrapper}>
            <p className={styles.textStyles}>
                {textContent}
            </p>
        </div>
    )
}

export default TextBlock