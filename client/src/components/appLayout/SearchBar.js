import React, { useState } from 'react'
import styles from "./styles/searchBarStyles.module.css"
import SearchIcon from "../icons/SearchIcon"
const SearchBar = ({ inSearchMode, handleSearchIconClicked }) => {


    return (
        <div className={inSearchMode ? styles.container : styles.containerShrink} >
            <div className={styles.iconContainer} >
                <div className={styles.searchIconDiv} onClick={handleSearchIconClicked}>
                    <SearchIcon inSearchMode={inSearchMode}/>
                </div>
            </div>
            <div className={styles.inputContainer} >
                <input className={inSearchMode ? styles.searchInput : styles.searchInputShrink} />
            </div>



        </div>


    )
}

export default SearchBar