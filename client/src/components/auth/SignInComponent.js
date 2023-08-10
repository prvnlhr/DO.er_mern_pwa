import React, { useState } from 'react'
import styles from "./styles/signInComponent.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { userSignInAsync } from "../../redux/features/auth/authSlice"
import { useLocalAuthContext } from "../../appState/localAuthContext"
import FullNameIcon from "./formIcons/FullNameIcon"
import EmailIcon from "./formIcons/EmailIcon"
import CountryIcon from "./formIcons/CountryIcon"
import ButtonArrowIcon from "./formIcons/ButtonArrowIcon"
import ErrorIcon from "./formIcons/ErrorIcon"
import SuccessIcon from "./formIcons/SuccessIcon"
import AuthLoadingSpinner from './formIcons/AuthLoadingSpinner'

const SignInCOmponent = () => {

    const dispatch = useDispatch();

    const [currFocusField, setCurrFocusField] = useState(undefined);

    const { localAuthData, updateLocalAuthState, setLocalAuthData } = useLocalAuthContext();

    const authState = useSelector((state) => state.auth);

    const { isError, message, isLoading, authType } = authState || {};
    const emailSent = useSelector(state => state.auth.emailSent);


    const [signInFormData, setSignInFormData] = useState({
        emailAddress: ''
    });

    const handleSignInFormDataChange = (e) => {
        const { name, value } = e.target;
        setSignInFormData({
            ...signInFormData,
            [name]: value
        });

        setLocalAuthData({
            ...localAuthData,
            [name]: value
        })
    };



    const handleSubmitBtnClicked = async () => {
        const res = await dispatch(userSignInAsync(signInFormData));
        console.log('dispatch res', res);
        if (res.type === 'auth/userSignIn/fulfilled' && res.payload === 'OTP sent to your email.') {
            updateLocalAuthState('showOtpComponent', true);
        }
    };

    const handleToggleFormLinkClicked = () => {
        updateLocalAuthState('showSignInForm', false);
    }

    const handleSusbmitBtnClicked = () => {
        console.log('clicked');
    }
    const setFocus = (val) => {
        setCurrFocusField(val)
    }

    return (
        <div className={styles.signInFormGrid}>

            <div className={styles.authMessageCell}>
                {message && authType === 'SIGNIN' &&

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
                            onFocus={() => setFocus(2)}
                            type="email" id="email"
                            name='emailAddress'
                            value={signInFormData.emailAddress}
                            onChange={handleSignInFormDataChange}
                        />
                    </div>
                </div>
            </div>





            <div className={styles.buttonCell}>
                <div className={styles.btnWrapper} >
                    <div className={styles.btnTextContainer} >
                        <p>Sign<span>In</span></p>
                    </div>
                    <div className={styles.btnIconContainer} >
                        <button className={styles.submitBtn}
                            onFocus={() => setFocus(4)}
                            onClick={handleSubmitBtnClicked}>
                            {isLoading ?
                                <AuthLoadingSpinner /> :
                                <ButtonArrowIcon />
                            }
                        </button >
                    </div>
                </div>
            </div>

            <div className={styles.bottomLinkCell}>
                <p>Not yet Registered ? <span onClick={handleToggleFormLinkClicked} >SignUp</span></p>
            </div>
        </div>

    )
}

export default SignInCOmponent