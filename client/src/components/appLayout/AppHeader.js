import React, { useState } from 'react'
import styles from "./styles/appHeaderStyles.module.css"
import AppLogo from "../icons/AppLogo"
import ProfileIcon from "../icons/ProfileIcon"
import SearchBar from './SearchBar'
import { useCourseContext } from "../../appState/appContext"
import { searchKeyword } from "../helperFunctions/searchHelperFunction"
import AppLogox from '../icons/AppLogox'

import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"
import { useDispatch } from 'react-redux'
import { addNewUser } from "../../redux/features/auth/authSlice"
const AppHeader = () => {

    const dispatch = useDispatch();

    const [inSearchMode, setInSearchMode] = useState(false);
    const [searchKey, setSearchKey] = useState('');
    const { currentCourseData, updateCurrentCourseData } = useCourseContext();
    const { searchResult } = currentCourseData;

    const handleSearchIconClicked = () => {
        setInSearchMode(!inSearchMode);
        setSearchKey('');
        updateReduxState(dispatch, 'searchResultList', []);

    }


    const addUserTODB = () => {
        console.log('addNewUser')
        dispatch(addNewUser({
            name: 'Praveen Lohar',
            phoneNumber: 8619993453
        }));
    }


    return (
        <div className={styles.appHeaderStylesWrapper} >

            <div className={styles.headerInnerWrapper} >
                <div className={styles.appLogoWrapper} >
                    <div className={styles.logoContainer} onClick={addUserTODB} >
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