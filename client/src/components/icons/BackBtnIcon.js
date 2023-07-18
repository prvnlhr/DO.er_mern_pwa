import React from 'react'
import styles from "./styles/backBtnIconStyles.module.css"
const BackBtnIcon = () => {
    return (
        <svg
            // width="24" height="24"
            className={styles.backBtnStyle}
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" fill="white" fill-opacity="0.2" />
            <path d="M13 9L10.7071 11.2929C10.3166 11.6834 10.3166 12.3166 10.7071 12.7071L13 15" stroke="white" stroke-width="1.5" stroke-linecap="round" />
        </svg>


    )
}

export default BackBtnIcon