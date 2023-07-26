import React from 'react'
import styles from "../styles/markdownStyles.module.css"
const HighlightText = ({ textContent }) => {
    return (
        <span className={styles.spanTextHighlight} >{textContent}</span>
    )
}

export default HighlightText