import React from 'react'
import styles from "./styles/strongTextStyles.module.css"

const StrongText = ({ textContent }) => {
    return (
        <span className={styles.strongTextStyle} >{textContent}</span>
    )
}

export default StrongText