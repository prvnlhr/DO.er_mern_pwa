import React, { useEffect, useState } from 'react'
import styles from "./styles/appHeaderStyles.module.css"
import AppLogo from "../icons/AppLogo"
import PopUpBtnIcon from "../icons/PopUpBtnIcon"
import SearchBar from './SearchBar'
import { useLocalAuthContext } from "../../appState/localAuthContext"
import { searchKeyword } from "../helperFunctions/searchHelperFunction"
import AppLogox from '../icons/AppLogox'
import { motion } from 'framer-motion';
import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { logoutAsync } from "../../redux/features/auth/authSlice"
import PopUpMenu from './PopUpMenu'

const AppHeader = ({ showAuthForm, setShowAuthForm, popUpMenuRef }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const authState = useSelector((state) => state.auth);

    const { accessToken } = authState;

    const { localAuthData, updateLocalAuthState, setLocalAuthData } = useLocalAuthContext();

    const [inSearchMode, setInSearchMode] = useState(false);
    const [searchKey, setSearchKey] = useState('');

    const [popUpOpen, setPopUpOpen] = useState(false);


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

    const handleLogoutBtnClicked = () => {
        dispatch(logoutAsync());
    }

    useEffect(() => {
        let handler = (e) => {
            if (!popUpMenuRef.current.contains(e.target)) {
                setPopUpOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    const togglePopUpOpen = () => {
        setPopUpOpen(!popUpOpen);
    }

    return (
        <div className={styles.appHeaderStylesWrapper} >

            <div className={styles.headerInnerWrapper} >


                <div className={styles.appLogoWrapper} onClick={() => navigate('/')}  >
                    <div className={styles.logoContainer}  >
                        <AppLogo />
                    </div>
                </div>


                <div className={styles.rightWrapper} >
                    {(accessToken && location.pathname !== '/user/classroom') &&
                        <div className={`${styles.classroomBtnWrapper} ${inSearchMode ? styles.classroomBtnWrapperShrink : styles.classroomBtnWrapperExpand}`}>
                            <div className={styles.classroomBtnDiv} onClick={handleClassroomBtnClicked}>
                                <p className={styles.classroomBtnText}>Classroom</p>
                            </div>
                        </div>
                    }

                    <div className={`${styles.searchBarWrapper} ${inSearchMode ? styles.searchBarWrapperExpand : styles.searchBarWrapperShrink}`}>
                        <SearchBar
                            inSearchMode={inSearchMode}
                            handleSearchIconClicked={handleSearchIconClicked}
                            searchKey={searchKey}
                            setSearchKey={setSearchKey}
                        />
                    </div>

                    <div className={`${styles.popUpBtnWrapper} ${inSearchMode ? styles.popUpBtnWrapperShrink : styles.popUpBtnWrapperExpand}`} ref={popUpMenuRef}>
                        <div className={styles.popUpBtnIconDiv}>
                            <PopUpBtnIcon togglePopUpOpen={togglePopUpOpen} />
                            {popUpOpen &&
                                <PopUpMenu popUpMenuRef={popUpMenuRef} setPopUpOpen={setPopUpOpen} />
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div >

    )
}

export default AppHeader;