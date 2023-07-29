import React from 'react'
import styles from "./styles/searchIconStyles.module.css"
const SearchIcon = ({ inSearchMode }) => {
    return (

        <>

            {inSearchMode ?

                <svg
                    // width="24" height="24" 
                    className={styles.searchIconStyle}
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0931 4.90698L4.90723 19.0929M4.90723 4.90698L19.0931 19.0929" stroke="white" stroke-width="1.80942" stroke-linecap="round" stroke-linejoin="round" />
                </svg>



                :
                <svg
                    // width="24" height="24"
                    className={styles.searchIconStyle}
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 22L20 20M2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            }

        </>
    )
}

export default SearchIcon