import React, { useState } from 'react'
import styles from "./styles/searchBarStyles.module.css"
import SearchIcon from "../icons/SearchIcon"
import { searchKeyword } from "../utilityFunctions/searchFunction"
import { useCourseContext } from "../../appState/appContext"

const SearchBar = ({ inSearchMode, handleSearchIconClicked, searchKey, setSearchKey }) => {

    const { currentCourseData, updateCurrentCourseData } = useCourseContext();

    const handleInputChange = (event) => {
        const keyword = event.target.value;
        setSearchKey(keyword);

        const result = searchKeyword(keyword);
        // console.log(result)
        // setSearchResult(result);
        updateCurrentCourseData('searchResult', result);
    };


    return (
        <div className={inSearchMode ? styles.container : styles.containerShrink} >
            <div className={styles.iconContainer} >
                <div className={styles.searchIconDiv} onClick={handleSearchIconClicked}>
                    <SearchIcon inSearchMode={inSearchMode} />
                </div>
            </div>
            <div className={styles.inputContainer} >
                <input className={inSearchMode ? styles.searchInput : styles.searchInputShrink}
                    type="text"
                    value={searchKey}
                    onChange={handleInputChange}
                    placeholder="Search by topic_name"
                />
            </div>



        </div>


    )
}

export default SearchBar