import React from 'react'
import styles from "./styles/otpResendComponentStyles.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { useLocalAuthContext } from "../../../appState/localAuthContext"
import { resendOtpAsync, verifyOtpAsync } from "../../../redux/features/auth/authSlice"

const OtpResendBtnComponent = () => {
    const dispatch = useDispatch();

    const { localAuthData, updateLocalAuthState, setLocalAuthData } = useLocalAuthContext();
    const { emailAddress } = localAuthData;
    const authState = useSelector((state) => state.auth);
    const { message, isLoading, otpVerified } = authState || {};
    const resentOptEmailSent = useSelector(state => state.auth.resentOpt);

    const handleOtpResendBtnComponentClicked = async () => {
        try {
            const emaill = 'prvnlhr522@gmail.com';
            const res = await dispatch(resendOtpAsync(emaill));
            console.log(res);
            if (res.type === 'auth/resendOtp/fulfilled'
                && res.payload.message === 'OTP Resent sent to your email.'
            ) {

                console.log('Resent Opt Success, showing otp input...')
                updateLocalAuthState('showResendOtpBtn', false);

            } else if (res.type === 'auth/verifyOtp/rejected') {
                console.log('error a t disptach Otp component');
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.otpResendWrapper} >
            <div className={styles.OtpResendBtnComponentDiv} onClick={handleOtpResendBtnComponentClicked}>
                {isLoading ?
                    <p>Sending OTP...</p> :
                    <p>Resend Otp</p>
                }
            </div>
        </div>
    )
}

export default OtpResendBtnComponent