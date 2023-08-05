import React, { useState } from 'react'
import styles from "./styles/searchBarStyles.module.css"
import SearchIcon from "../icons/SearchIcon"
import { searchKeyword } from "../helperFunctions/searchHelperFunction"
import { useCourseContext } from "../../appState/appContext"
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"
import { useDispatch } from 'react-redux'

const SearchBar = ({ inSearchMode, handleSearchIconClicked, searchKey, setSearchKey }) => {

    const dispatch = useDispatch();


    const searchForKeyword = () => {
        const result = searchKeyword(searchKey);
        // updateReduxState(dispatch, 'searchResultList', result);
        updateReduxState(dispatch,
            {
                data: {
                    'searchResultList': result
                }
            }

        );
    }

    const handleInputChange = (event) => {
        const keyword = event.target.value;
        setSearchKey(keyword);
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
                    placeholder="Search course, chapter, topic "
                />
                <div className={inSearchMode ? styles.hitSearchArrowIconContainer : styles.hitSearchArrowIconContainerShrink} >
                    {searchKey.length > 0 &&
                        <motion.div className={styles.hitSearchIconDiv}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.5, delay: 0 }}
                            onClick={searchForKeyword}
                        >
                            <svg
                                style={{ width: '100%' }}
                                viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.499 14.5L17.5 10.5M17.5 10.5L13.499 6.5M17.5 10.5H4.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </motion.div>
                    }

                </div>
            </div>



        </div>


    )
}

export default SearchBar