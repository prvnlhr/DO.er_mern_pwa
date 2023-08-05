import React from 'react'
import styles from "./styles/sidebarShowIcon.module.css"
const SideBarShowIcon = () => {
    return (
        // <svg
        //     className={styles.sideBarShowIcon}
        //     viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M20 6L4 6" stroke="#202D40" stroke-width="1.5" stroke-linecap="round" />
        //     <path opacity="0.3" d="M20 12L4 12" stroke="#202D40" stroke-width="1.5" stroke-linecap="round" />
        //     <path d="M20 18H4" stroke="#202D40" stroke-width="1.5" stroke-linecap="round" />
        // </svg>
        <svg
            className={styles.sideBarShowIcon}
            
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L4 6" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <path opacity="0.3" d="M20 12L4 12" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <path d="M20 18H4" stroke="white" stroke-width="1.5" stroke-linecap="round" />
        </svg>

    )
}

export default SideBarShowIcon