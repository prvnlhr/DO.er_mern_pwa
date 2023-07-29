import React from 'react'
import styles from "./styles/profileIcon.module.css"
const ProfileIcon = () => {
    return (
        // <svg
        //     // width="24" height="24" 
        //     viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <circle cx="5.9818" cy="5.98131" r="3.94469" fill="#7E8DA4" />
        //     <circle cx="18.0189" cy="5.98131" r="3.94469" fill="#7E8DA4" />
        //     <circle cx="5.9818" cy="18.0187" r="3.94469" fill="#7E8DA4" fill-opacity="0.13" />
        //     <circle cx="18.0189" cy="18.0187" r="3.94469" fill="#7E8DA4" />
        // </svg>
        <svg
            // width="24" height="24"
            className={styles.profileIcon}
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5.06631" cy="5.06643" r="3.96866" fill="#7E8DA4" />
            <circle cx="18.9335" cy="5.06643" r="3.96866" fill="#7E8DA4" />
            <circle cx="5.06631" cy="18.9335" r="3.96866" fill="#7E8DA4" fill-opacity="0.13" />
            <circle cx="18.9335" cy="18.9335" r="3.96866" fill="#7E8DA4" />
        </svg>


    )
}

export default ProfileIcon