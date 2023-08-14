import React from 'react'
import styles from "./styles/profileIcon.module.css"
const PopUpBtnIcon = ({ togglePopUpOpen }) => {
    return (
        <svg
            onClick={togglePopUpOpen}
            className={styles.profileIcon}
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5.06631" cy="5.06643" r="3.96866" fill="#7E8DA4" />
            <circle cx="18.9335" cy="5.06643" r="3.96866" fill="#7E8DA4" />
            <circle cx="5.06631" cy="18.9335" r="3.96866" fill="#7E8DA4" fill-opacity="0.13" />
            <circle cx="18.9335" cy="18.9335" r="3.96866" fill="#7E8DA4" />
        </svg>


    )
}

export default PopUpBtnIcon