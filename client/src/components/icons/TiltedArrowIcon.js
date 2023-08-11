import React from 'react'
import styles from "./styles/tiltedArrowIcon.module.css"
const TiltedArrowIcon = () => {
    return (
        <svg
            className={styles.arrowIcon}
            //  width="20" height="19"
            viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.05078 15.0221L15.3232 4.74969M15.3232 4.74969V14.6112M15.3232 4.74969H5.46168" stroke="white" stroke-width="1.30148" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default TiltedArrowIcon