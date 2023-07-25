import React from 'react'
import styles from "./styles/inlineCodeStyles.module.css"
const InlineCode = ({ inlineText }) => {
    return (
        <div className={styles.inlineWrapper}>
            <p>{inlineText}</p>
        </div>
    )
}

export default InlineCode