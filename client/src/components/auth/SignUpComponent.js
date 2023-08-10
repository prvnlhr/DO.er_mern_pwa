import React, { useEffect, useState } from 'react'
import styles from "./styles/signUpComponentStyles.module.css"

import { useDispatch, useSelector } from 'react-redux'
import { userSignUpAsync } from "../../redux/features/auth/authSlice"
import { useLocalAuthContext } from "../../appState/localAuthContext"

import FullNameIcon from "./formIcons/FullNameIcon"
import EmailIcon from "./formIcons/EmailIcon"
import CountryIcon from "./formIcons/CountryIcon"
import ButtonArrowIcon from "./formIcons/ButtonArrowIcon"
import ErrorIcon from "./formIcons/ErrorIcon"
import SuccessIcon from "./formIcons/SuccessIcon"
import AuthLoadingSpinner from './formIcons/AuthLoadingSpinner'

const SignUpComponent = () => {

    const dispatch = useDispatch();

    const { localAuthData, updateLocalAuthState, setLocalAuthData } = useLocalAuthContext();


    const authState = useSelector((state) => state.auth);
    const { message, isLoading, authType, isError } = authState || {};

    const [currFocusField, setCurrFocusField] = useState(undefined);

    const [signUpFormData, setSignUpFormData] = useState({
        fullName: '',
        emailAddress: '',
        country: ''
    });

    const handleSignUpFormDataChange = (e) => {
        const { name, value } = e.target;
        setSignUpFormData({
            ...signUpFormData,
            [name]: value
        });
    }

    const handleSubmitBtnClicked = async () => {
        const res = await dispatch(userSignUpAsync(signUpFormData));
        console.log('dispatch res', res);
        if (res.type === 'auth/userSignUp/fulfilled' && res.payload === 'OTP sent to your email.') {
            updateLocalAuthState('showOtpComponent', true);
        }
    }

    const handleToggleFormLinkClicked = () => {
        updateLocalAuthState('showSignInForm', true);
    }

    const setFocus = (val) => {
        setCurrFocusField(val)
    }

    return (
        <div className={styles.signUpFormGrid}>
            <div className={styles.authMessageCell}>

                {message && authType === 'SIGNUP' &&

                    <div className={`${styles.messageWrapper} ${isError ? styles.errorBackGround : styles.successBackGround}`} >
                        <div className={styles.messageIconContainer} >
                            <div className={styles.messageIconDiv} >
                                {
                                    isError
                                        ?
                                        <ErrorIcon />
                                        :
                                        <SuccessIcon />
                                }
                            </div>
                        </div>
                        <div className={styles.messageTextContainer} >
                            <p className={`${styles.messageText} ${isError ? styles.errorText : styles.successText}`}>
                                {message}
                            </p>
                        </div>
                    </div>
                }
            </div>


            <div className={styles.fullNameCell}>
                <div className={`${styles.inputGrid} ${currFocusField === 1 && styles.inputGridActive}`}>
                    <div className={styles.iconCell} >
                        <div className={styles.iconDiv} >
                            <FullNameIcon />
                        </div>
                    </div>
                    <div className={styles.labelCell} >
                        <p className={styles.labelText} >FULL NAME</p>
                    </div>
                    <div className={styles.inputCell} >
                        <input
                            className={styles.formInput}
                            name='fullName'
                            value={signUpFormData.fullName}
                            onFocus={() => setFocus(1)}
                            onChange={handleSignUpFormDataChange}
                        />
                    </div>
                </div>
            </div>


            <div className={styles.emailAddressCell}>
                <div className={`${styles.inputGrid} ${currFocusField === 2 && styles.inputGridActive}`}>
                    <div className={styles.iconCell} >
                        <div className={styles.iconDiv} >
                            <EmailIcon />
                        </div>
                    </div>
                    <div className={styles.labelCell} >
                        <p className={styles.labelText} >EMAIL ADDRESS</p>
                    </div>
                    <div className={styles.inputCell} >
                        <input
                            className={styles.formInput}
                            name='emailAddress'
                            value={signUpFormData.emailAddress}
                            onFocus={() => setFocus(2)}
                            onChange={handleSignUpFormDataChange}

                        />
                    </div>
                </div>
            </div>


            <div className={styles.countryCell}>
                <div className={`${styles.inputGrid} ${currFocusField === 3 && styles.inputGridActive}`}   >
                    <div className={styles.iconCell} >
                        <div className={styles.iconDiv} >
                            <CountryIcon />
                        </div>
                    </div>
                    <div className={styles.labelCell} >
                        <p className={styles.labelText} >COUNTRY</p>
                    </div>
                    <div className={styles.inputCell} >
                        <input
                            className={styles.formInput}
                            name='country'
                            value={signUpFormData.country}
                            onFocus={() => setFocus(3)}
                            onChange={handleSignUpFormDataChange}

                        />
                    </div>
                </div>
            </div>


            <div className={styles.buttonCell}>
                <div className={styles.btnWrapper} >
                    <div className={styles.btnTextContainer} >
                        <p>Sign<span>Up</span></p>
                    </div>
                    <div className={styles.btnIconContainer} >
                        <button className={styles.submitBtn}
                            onFocus={() => setFocus(4)}
                            onClick={handleSubmitBtnClicked}>
                            {isLoading ?
                                <AuthLoadingSpinner /> :
                                <ButtonArrowIcon />
                            }
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.bottomLinkCell}>
                <p>Already Registered ? <span onClick={handleToggleFormLinkClicked} >SignIn</span></p>
            </div>
        </div>
    )
}

export default SignUpComponent