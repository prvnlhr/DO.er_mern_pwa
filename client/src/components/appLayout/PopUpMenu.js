import React, { useEffect, useState } from 'react'

import styles from "./styles/popUpMenuStyles.module.css"
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
import SignInIcon from "./popUpIcon/SignInIcon"
import SignOutIcon from "./popUpIcon/SignOutIcon"
import ChevronIcon from "./popUpIcon/ChevronIcon"
import SpinnerIcon from './popUpIcon/SpinnerIcon'

const PopUpMenu = ({ popUpMenuRef, setPopUpOpen }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const authState = useSelector((state) => state.auth);

    const { accessToken, isLoading, authType } = authState;

    const { localAuthData, updateLocalAuthState, setLocalAuthData, resetLocalAuthState } = useLocalAuthContext();



    const handleSigInBtnClicked = async () => {
        setPopUpOpen(false);
        updateLocalAuthState('showAuthForm', true);
    }


    const handleLogoutBtnClicked = async () => {

        const res = await dispatch(logoutAsync());

        if (res.type === 'auth/logout/fulfilled') {
            resetLocalAuthState();
            setPopUpOpen(false);
        }
        else if (res.type === 'auth/logout/rejected') {
            console.log('Error');
        }

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



    return (
        <div className={styles.popUpMenuWrapper} >
            <div className={styles.popUpMenuInnerWrapper} >

                {accessToken &&
                    <div className={styles.nameWrapper} >
                        <div className={styles.breadCrumWrapper} >
                            <div className={styles.breadCrumTextContainer} >
                                <p>Signed in as</p>
                            </div>
                            <div className={styles.breadCrumIconContainer} >
                                <div className={styles.chevIconDiv} >
                                    <ChevronIcon />
                                </div>
                            </div>
                        </div>
                        <div className={styles.nameContainer} >
                            <p>{'Steve Rogers'}</p>
                        </div>
                    </div>
                }

                {accessToken

                    ?

                    <div className={styles.authBtnWrapper} >
                        <button className={styles.authButton} onClick={handleLogoutBtnClicked} >

                            {isLoading === true && authType === 'LOGOUT' ?
                                <SpinnerIcon />
                                :
                                <>
                                    <div className={styles.btnIconContainer} >
                                        <div className={styles.btnIconDiv} >
                                            <SignOutIcon />
                                        </div>
                                    </div>
                                    <div className={styles.btnTextContainer} >
                                        <p>SignOut</p>
                                    </div>
                                </>
                            }

                        </button>
                    </div>

                    :


                    <div className={styles.authBtnWrapper} >
                        <button className={styles.authButton} onClick={handleSigInBtnClicked}>
                            <div className={styles.btnIconContainer} >
                                <div className={styles.btnIconDiv} >
                                    <SignInIcon />
                                </div>
                            </div>
                            <div className={styles.btnTextContainer} >
                                <p>SignIn</p>
                            </div>
                        </button>
                    </div>
                }



            </div>
        </div>
    )
}

export default PopUpMenu