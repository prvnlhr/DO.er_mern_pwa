import React, { useState } from 'react'
import styles from "./styles/appHeaderStyles.module.css"
import AppLogo from "../icons/AppLogo"
import ProfileIcon from "../icons/ProfileIcon"
import SearchBar from './SearchBar'
import { useCourseContext } from "../../appState/appContext"
import { searchKeyword } from "../utilityFunctions/searchFunction"
import AppLogox from '../icons/AppLogox'

const AppHeader = () => {

    const [inSearchMode, setInSearchMode] = useState(false);
    const [searchKey, setSearchKey] = useState('');
    const { currentCourseData, updateCurrentCourseData } = useCourseContext();
    const { searchResult } = currentCourseData;

    const handleSearchIconClicked = () => {
        setInSearchMode(!inSearchMode);
        setSearchKey('');
        updateCurrentCourseData('searchResult', [])

    }

    const searchForKeyword = () => {
        const result = searchKeyword(searchKey);
        updateCurrentCourseData('searchResult', result);
    }




    return (
        <div className={styles.appHeaderStylesWrapper} >

            <div className={styles.headerInnerWrapper} >

                <div className={styles.appLogoWrapper} >
                    <div className={styles.logoContainer}
                    // onClick={searchForKeyword} 
                    >
                        <AppLogo />
                    </div>
                </div>
                <div className={styles.searchProfileOuterWrapper} >

                    <div className={inSearchMode ? styles.searchBarWrapperExpand : styles.searchBarWrapper}>
                        <SearchBar
                            inSearchMode={inSearchMode}
                            handleSearchIconClicked={handleSearchIconClicked}
                            searchKey={searchKey}
                            setSearchKey={setSearchKey}
                        />
                    </div>

                    <div className={inSearchMode ? styles.userProfileWrapperShrink : styles.userProfileWrapper} >
                        <div className={styles.profileIconDiv} >
                            <ProfileIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default AppHeader;