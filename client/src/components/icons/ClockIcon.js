import React from 'react'

import styles from "./styles/clockIconStyle.module.css"
const ClockIcon = () => {
    return (
        <svg
            // width="24" height="24"
            className={styles.clockStyle}
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2H14" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <path d="M12 2L12 5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 4.25C6.61522 4.25 2.25 8.61522 2.25 14C2.25 19.3848 6.61522 23.75 12 23.75C17.3848 23.75 21.75 19.3848 21.75 14C21.75 8.61522 17.3848 4.25 12 4.25Z" fill="white" />
            <path d="M12 14L15 11" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <path d="M18.5 7L19 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
        </svg>

    )
}

export default ClockIcon