import React from 'react'
import styles from "./styles/courseModuleIconStyles.module.css"
const CourseModuleCardIcon = () => {
    return (
        <svg
            className={styles.courseModuleIcon}
            // width="24" height="24" 
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M1.57715 3.61499C1.57715 2.51042 2.47258 1.61499 3.57715 1.61499H8.50048C9.60505 1.61499 10.5005 2.51042 10.5005 3.61499V8.53833C10.5005 9.64289 9.60505 10.5383 8.50048 10.5383H3.57715C2.47258 10.5383 1.57715 9.64289 1.57715 8.53832V3.61499Z" fill="#28303F" />
            <path opacity="0.4" d="M13.5 15.5383C13.5 14.4338 14.3954 13.5383 15.5 13.5383H20.4233C21.5279 13.5383 22.4233 14.4338 22.4233 15.5383V20.4617C22.4233 21.5662 21.5279 22.4617 20.4233 22.4617H15.5C14.3954 22.4617 13.5 21.5662 13.5 20.4617V15.5383Z" fill="#28303F" />
            <circle cx="6.03881" cy="18" r="4.46166" fill="#28303F" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6C14 5.58579 14.3358 5.25 14.75 5.25H21.25C21.6642 5.25 22 5.58579 22 6C22 6.41421 21.6642 6.75 21.25 6.75H14.75C14.3358 6.75 14 6.41421 14 6Z" fill="#28303F" />
        </svg>


    )
}

export default CourseModuleCardIcon