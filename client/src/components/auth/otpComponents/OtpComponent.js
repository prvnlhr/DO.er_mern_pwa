import React, { useState } from 'react'
import styles from "./styles/otpComponentStyles.module.css"
import OtpInputComponent from "./OtpInputComponent"
import { useDispatch, useSelector } from 'react-redux'
import { useLocalAuthContext } from "../../../appState/localAuthContext"

import OtpResendBtnComponent from './OtpResendBtnComponent'

const OtpComponent = () => {


    const { localAuthData, updateLocalAuthState, setLocalAuthData } = useLocalAuthContext();
    const { emailAddress } = localAuthData;

    const resentOptEmailSent = useSelector(state => state.auth.resentOpt);



    return (
        <div className={styles.otpComponentWrapper} >
            {localAuthData.showResendOtpBtn
                // && resentOptEmailSent !== 'sent'
                ?
                <OtpResendBtnComponent />
                :
                <div className={styles.otpInputWrapper} >
                    <OtpInputComponent />
                </div>
            }

        </div>
    )
}

export default OtpComponent