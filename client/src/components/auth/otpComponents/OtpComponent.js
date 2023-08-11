import React, { useEffect, useState, useRef } from 'react'
import styles from "./styles/otpComponentStyles.module.css"
import OtpInputComponent from "./OtpInputComponent"
import { useDispatch, useSelector } from 'react-redux'
import { verifyOtpAsync, resendOtpAsync } from "../../../redux/features/auth/authSlice"
import { useLocalAuthContext } from "../../../appState/localAuthContext"

import FullNameIcon from "../formIcons/FullNameIcon"
import EmailIcon from "../formIcons/EmailIcon"
import CountryIcon from "../formIcons/CountryIcon"
import ButtonArrowIcon from "../formIcons/ButtonArrowIcon"
import ErrorIcon from "../formIcons/ErrorIcon"
import SuccessIcon from "../formIcons/SuccessIcon"
import ResendIcon from "../formIcons/ResendIcon"

import OtpResendBtnComponent from './OtpResendBtnComponent'

import { motion } from 'framer-motion';
import AuthLoadingSpinner from '../formIcons/AuthLoadingSpinner'


const OtpComponent = () => {

    const [timer, setTimer] = useState({
        time: 120,
        timeExpired: false
    });
    const [otpValues, setOtpValues] = useState(['', '', '', '']);
    const [activeFieldIndex, setActiveFieldIndex] = useState(0);

    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const { localAuthData, updateLocalAuthState, setLocalAuthData, resetLocalAuthState } = useLocalAuthContext();
    const { emailAddress } = localAuthData;

    const authState = useSelector((state) => state.auth);
    const { isError, authType, message, isLoading, otpVerified } = authState || {};

    const resentOptEmailSent = useSelector(state => state.auth.resentOpt);

    // -----------------------------------------------------------------------------------------------------

    const dispatch = useDispatch();

    useEffect(() => {
        let interval;

        if (timer.time > 0 && otpVerified === 'not_verified' && !timer.timeExpired) {
            interval = setInterval(() => {
                setTimer((prevTimer) => ({
                    ...prevTimer,
                    time: prevTimer.time - 1
                }));
            }, 1000);

        } else if (timer.time === 0) {
            setTimer((prevTimer) => ({
                ...prevTimer,
                timeExpired: true
            }));
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [timer.time, otpVerified, timer.timeExpired]);


    //-----------------------------------------------------------------------------


    const handleOtpInputChange = (index, value) => {
        console.log(index, value)
        if (value.length === 1) {
            const newOtpValues = [...otpValues];
            newOtpValues[index] = value;
            setOtpValues(newOtpValues);

            if (index < 3) {
                inputRefs[index + 1].current.focus();
            } else {
                console.log(otpValues);
            }
        }
    };

    const handleBackspace = (index) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = '';
        setOtpValues(newOtpValues);

        if (index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Backspace') {
                handleBackspace(activeFieldIndex);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeFieldIndex]);


    const resetTimer = () => {

        setTimer({
            time: 120,
            timeExpired: false
        });

        setOtpValues(['', '', '', ''])
        setActiveFieldIndex(0);
    };

    // -----------------------------------------------------------------
    const handleOtpSubmit = async () => {
        const otp = otpValues.join('');
        console.log(otp);
        try {
            const res = await dispatch(verifyOtpAsync({ otp, emailAddress }));
            if (res.type === 'auth/verifyOtp/fulfilled' && res.payload.message === 'OTP verified successfully.' && res.payload.accessToken) {
                console.log('OTP VERIFIED, CLOSING FORM...');
                resetLocalAuthState();
            } else if (res.type === 'auth/verifyOtp/rejected') {
                console.log(res);
            }
        } catch (error) {
            console.error(error);
        }
    };

    //-------------------------------------------------------------------------------

    const handleOtpResendBtnClicked = async () => {
        resetTimer();
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


    //--------------------------------------------------------------------------------

    return (
        <div className={styles.otpFormGrid} >
            <div className={styles.headingCell} >
                <p>OTP Verification</p>
            </div>

            <div className={styles.emailAddressCell} >
                <p className={styles.emailMessageText}>Enter the OTP you received on</p>
                <p className={styles.emailText} >andr***garf@gmail.com</p>
            </div>
            <div className={styles.messageCell} >

                {message && authType === 'OTP' &&
                    <div className={`${styles.messageWrapper} ${isError ? styles.errorBackGround : styles.successBackGround}`} >
                        <div className={styles.messageIconContainer} >
                            <div className={styles.messageIconDiv} >
                                {isError ?
                                    <ErrorIcon /> :
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
                {/* <div className={`${styles.messageWrapper} ${isError ? styles.errorBackGround : styles.successBackGround}`} >
                    <div className={styles.messageIconContainer} >
                        <div className={styles.messageIconDiv} >
                            <SuccessIcon />
                        </div>
                    </div>
                    <div className={styles.messageTextContainer} >
                        <p className={`${styles.messageText} ${isError ? styles.errorText : styles.successText}`}>
                            {'This is test OTP message'}
                        </p>
                    </div>
                </div> */}
            </div>
            <div className={styles.inputCell} >

                {otpValues.map((value, index) => (
                    <div key={index} className={`${styles.optInputContainer} ${activeFieldIndex === index && styles.optInputContainerActive}`}>
                        <input
                            ref={inputRefs[index]}
                            type='number'
                            value={value}
                            className={`${styles.otpInput}`}
                            onFocus={() => setActiveFieldIndex(index)}
                            onChange={(e) => handleOtpInputChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>

            <div className={styles.resendCell}>
                <motion.button
                    disabled={timer > 0 ? true : false}
                    className={`${styles.optResendBtn} ${!timer.time > 0 && styles.optResendBtnWhenActive}`}
                    // onFocus={() => setActiveFieldIndex(5)}
                    onFocus={timer.time === 0 ? () => setActiveFieldIndex(5) : undefined}
                    onClick={timer.time > 0 ? undefined : handleOtpResendBtnClicked}
                    initial={{ x: 0 }}
                    animate={{ x: timer.time === 0 ? '90%' : 0 }}
                    transition={{
                        ease: [0.39, 0.575, 0.565, 1],
                        duration: 0.7,
                    }}

                >
                    <div className={styles.otpResendTextContainer}>
                        {timer.time > 0 ? <p>RETRY IN</p> : <p>RESEND OTP</p>}
                    </div>
                    <div className={styles.optResendIconContainer}>
                        <div className={styles.optResendIconDiv}>
                            <ResendIcon bgColor={timer.time > 0 ? '#7E8DA4' : '#6167A0'} />
                        </div>
                    </div>
                </motion.button>

                <motion.div
                    className={`${styles.timerContainer}`}
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: timer.time === 0 ? '100%' : '0%', opacity: timer.time === 0 ? [0.2, 0.1, 0] : 1 }}
                    transition={{
                        ease: [0.39, 0.575, 0.565, 1],
                        duration: 0.7,
                    }}
                >
                    <motion.div
                        className={`${styles.timeDiv} ${timer.timeExpired === true && styles.timeExpireBackGround}`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: timer.time === 0 ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className={`${styles.timeText} ${timer.timeExpired === true && styles.timeExpireText}`}>
                            {Math.floor(timer.time / 60).toString().padStart(2, '0')}
                        </p>
                    </motion.div>
                    <div className={styles.timeColonDiv}><p>:</p></div>
                    <motion.div
                        className={`${styles.timeDiv} ${timer.timeExpired === true && styles.timeExpireBackGround}`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: timer.time === 0 ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className={`${styles.timeText} ${timer.timeExpired === true && styles.timeExpireText}`}>
                            {((timer.time % 60).toString().padStart(2, '0'))}
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            <div className={styles.submitBtnCell} >
                <div className={styles.btnWrapper} >
                    <div className={styles.btnTextContainer} >
                        <p>Verify<span> OTP</span></p>
                    </div>
                    <div className={styles.btnIconContainer} >
                        <button className={styles.submitBtn}
                            onFocus={() => setActiveFieldIndex(6)}
                            onClick={handleOtpSubmit}>
                            {isLoading ?
                                <AuthLoadingSpinner /> :
                                <ButtonArrowIcon />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OtpComponent