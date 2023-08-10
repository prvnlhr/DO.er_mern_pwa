import React, { useEffect, useState } from 'react'
import styles from "./styles/appHeaderStyles.module.css"
import AppLogo from "../icons/AppLogo"
import ProfileIcon from "../icons/ProfileIcon"
import SearchBar from './SearchBar'
import { useLocalAuthContext } from "../../appState/localAuthContext"
import { searchKeyword } from "../helperFunctions/searchHelperFunction"
import AppLogox from '../icons/AppLogox'
import { motion } from 'framer-motion';
import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

const AppHeader = ({ showAuthForm, setShowAuthForm }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const authState = useSelector((state) => state.auth);

    const { accessToken } = authState;

    const { localAuthData, updateLocalAuthState, setLocalAuthData } = useLocalAuthContext();

    const [inSearchMode, setInSearchMode] = useState(false);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchIconClicked = () => {
        setInSearchMode(!inSearchMode);
        setSearchKey('');
        updateReduxState(dispatch, 'searchResultList', []);
    }


    const handleSigInBtnClicked = () => {
        updateLocalAuthState('showAuthForm', true);
    }

    const handleClassroomBtnClicked = () => {
        navigate('/user/classroom');
    }


    return (
        <div className={styles.appHeaderStylesWrapper} >

            <div className={styles.headerInnerWrapper} >
                <div className={styles.appLogoWrapper}   >
                    <div className={styles.logoContainer}  >
                        <AppLogo />
                    </div>
                </div>

                <div className={styles.rightWrapper} >

                    {(accessToken) ?
                        (location.pathname !== '/user/classroom' &&
                            <div className={`${styles.signInBtnWrapper} ${inSearchMode ? styles.signInBtnWrapperShrink : styles.signInBtnWrapperExpand}`}>
                                <div className={styles.signInBtnDiv} onClick={handleClassroomBtnClicked}>
                                    <p className={styles.signInBtnText}>Classroom</p>
                                </div>
                            </div>
                        )
                        :
                        (!showAuthForm &&
                            <div className={`${styles.signInBtnWrapper} ${inSearchMode ? styles.signInBtnWrapperShrink : styles.signInBtnWrapperExpand}`}>
                                <div className={styles.signInBtnDiv} onClick={handleSigInBtnClicked}>
                                    <p className={styles.signInBtnText}>Sign In</p>
                                </div>
                            </div>
                        )
                    }

                    {/* <div className={`${styles.signInBtnWrapper} ${inSearchMode ? styles.signInBtnWrapperShrink : styles.signInBtnWrapperExpand}`}>
                        <div className={styles.signInBtnDiv} onClick={handleSigInBtnClicked}>
                            <p className={styles.signInBtnText} >Sign In</p>
                        </div>
                    </div> */}

                    <div className={`${styles.searchBarWrapper} ${inSearchMode ? styles.searchBarWrapperExpand : styles.searchBarWrapperShrink}`}>
                        <SearchBar
                            inSearchMode={inSearchMode}
                            handleSearchIconClicked={handleSearchIconClicked}
                            searchKey={searchKey}
                            setSearchKey={setSearchKey}
                        />
                    </div>

                    <div className={`${styles.userProfileWrapper} ${inSearchMode ? styles.userProfileWrapperShrink : styles.userProfileWrapperExpand}`}>
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