import React from 'react'
import styles from "./styles/chevronIconStyles.module.css"
const ChevronIcon = () => {
    return (
        <svg
            // width="10" height="10" 
            className={styles.chevronIcon}
            viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_239_975)">
                <path d="M4.73379 8.86304L8.48633 5.1105L4.73379 1.35796" stroke="#7E8DA4" stroke-width="1.07215" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_239_975">
                    <rect width="8.70186" height="8.70186" fill="white" transform="matrix(-1 0 0 -1 9.10547 9.46143)" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default ChevronIcon