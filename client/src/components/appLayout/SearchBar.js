import React, { useState } from 'react'
import styles from "./styles/searchBarStyles.module.css"
import SearchIcon from "../icons/SearchIcon"
import { searchKeyword } from "../utilityFunctions/searchFunction"
import { useCourseContext } from "../../appState/appContext"

import { useNavigate } from 'react-router-dom'

const SearchBar = ({ inSearchMode, handleSearchIconClicked, searchKey, setSearchKey }) => {

    const { currentCourseData, updateCurrentCourseData } = useCourseContext();



    const searchForKeyword = () => {
        const result = searchKeyword(searchKey);
    }

    const handleInputChange = (event) => {
        const keyword = event.target.value;
        setSearchKey(keyword);


        // const result = searchKeyword(keyword);
        // updateCurrentCourseData('searchResult', result);
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