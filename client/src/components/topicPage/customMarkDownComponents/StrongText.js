import React from 'react'
import styles from "./styles/markdownCustomStyles.module.css"

const StrongText = ({ textContent }) => {
    return (
        <span className={styles.strongTextStyle} >{textContent}</span>
    )
}

export default StrongText