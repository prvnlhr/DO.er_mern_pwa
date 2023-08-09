import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api/index";


const OTP_EMAIL_SENT_STATE = {
    NOT_SENT: 'not_sent',
    SENT: 'sent',
};
const RESENT_OTP_EMAIL_SENT_STATE = {
    NOT_SENT: 'not_sent',
    SENT: 'sent',
};

const OTP_VERIFICATION_STATES = {
    NOT_VERIFIED: 'not_verified',
    VERIFIED: 'verified',
};

const initialState = {
    userId: '',
    accessToken: '',
    isLoading: false,
    message: '',
    emailSent: OTP_EMAIL_SENT_STATE.NOT_SENT,
    otpVerified: OTP_VERIFICATION_STATES.NOT_VERIFIED,
    resentOpt: RESENT_OTP_EMAIL_SENT_STATE.NOT_SENT

}

const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
};


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const addNewUser = createAsyncThunk("auth/addNewUser", async ({ name, phoneNumber }, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        // console.log(name, phoneNumber)
        const res = await api.addNewUser(name, phoneNumber);
        // console.log(res.data);
        return fulfillWithValue(res.data);
    } catch (error) {
        const errorMessage = error?.response.data.msg;
        return rejectWithValue({ errorMessage });
    }
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const checkAuthAsync = createAsyncThunk("auth/checkUserAuth", async (_, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        console.log('at checkAuthAsync')
        const res = await api.checkUserAuthRequest();
        console.log(res.data);
        return fulfillWithValue(res.data);
    } catch (error) {
        const errorMessage = error?.response.data.msg;
        const { errorMsg, actualError } = error?.response?.data;
        return rejectWithValue({
            errorMsg: errorMsg || 'unknown msg'
        });
    }
});


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const verifyOtpAsync = createAsyncThunk("auth/verifyOtp", async ({ otp, emailAddress }, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        console.log('verify opt verifyOtpAsync');
        const reqData = {
            otp, emailAddress
        }
        const res = await api.verifyOtpRequest(reqData);
        const { message, accessToken } = res.data || 'No succes message'
        console.log(accessToken, res.data);
        return fulfillWithValue(res.data);
    } catch (error) {
        console.error('Error:', error?.response?.data);
        const { errorMsg, actualError } = error?.response?.data;
        return rejectWithValue({
            errorMsg: errorMsg || 'unknown msg'
        });
    }
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const resendOtpAsync = createAsyncThunk("auth/resendOtp", async (emailAddress, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        console.log("authSlice resendOtpAsync")
        console.log(emailAddress);
        const reqData = {
            emailAddress
        }
        const res = await api.resendOtpRequest(reqData);
        const { message, accessToken } = res.data || 'No succes message'
        console.log(res.data);
        return fulfillWithValue(res.data);
        return fulfillWithValue({});
    } catch (error) {
        console.error('Error:', error?.response?.data);
        const { errorMsg, actualError } = error?.response?.data;
        return rejectWithValue({
            errorMsg: errorMsg || 'unknown msg'
        });
    }
});


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const userSignUpAsync = createAsyncThunk("auth/userSignUp", async (formData, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        const { fullName, emailAddress, country } = formData;
        const res = await api.userSignUpRequest(formData);
        const { message } = res.data || 'No succes message'
        return fulfillWithValue(message);
    } catch (error) {
        console.error('Error:', error?.response?.data);
        const { errorMsg, actualError } = error?.response?.data;
        return rejectWithValue({
            errorMsg: errorMsg || 'unknown msg'
        });
    }
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const userSignInAsync = createAsyncThunk("auth/userSignIn", async (formData, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {

        const res = await api.userSignInRequest(formData);

        console.log('authSlice backend res', res.data)
        const { message } = res.data || 'No succes message'
        return fulfillWithValue(message);

    } catch (error) {
        console.error('Error:', error?.response?.data);
        const { errorMsg, actualError } = error?.response?.data;
        return rejectWithValue({
            errorMsg: errorMsg || 'unknown msg'
        });
    }
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setEmailSent: (state, action) => {
            state.emailSent = OTP_EMAIL_SENT_STATE.SENT;
        },
        updateAccessToken: (state, action) => {
            console.log('at update token', action.payload)
            return {
                ...state,
                accessToken: action.payload,
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewUser.fulfilled, (state, action) => {
                return {
                    ...state,
                }
            })


            .addCase(checkAuthAsync.pending, (state) => {
                return {
                    ...state,
                    isLoading: true,
                    message: '',
                };
            })
            .addCase(checkAuthAsync.fulfilled, (state, action) => {
                const { message, accessToken, userId } = action.payload;
                return {
                    ...state,
                    isLoading: false,
                    message: message,
                    accessToken: accessToken,
                    userId: userId
                };
            })
            .addCase(checkAuthAsync.rejected, (state, action) => {
                return {
                    ...state,
                    isLoading: false,
                    message: '',
                };
            })
            .addCase(verifyOtpAsync.pending, (state, action) => {
                console.log('verifyOtpAsync.pending');
                return {
                    ...state,
                    isLoading: true,
                    message: '',
                };
            })
            .addCase(verifyOtpAsync.fulfilled, (state, action) => {
                const { message, accessToken, userId } = action.payload;
                return {
                    ...state,
                    isLoading: false,
                    otpVerified: OTP_VERIFICATION_STATES.VERIFIED,
                    message: message,
                    accessToken: accessToken,
                    userId: userId,
                    emailSent: OTP_EMAIL_SENT_STATE.NOT_SENT

                };
            })
            .addCase(verifyOtpAsync.rejected, (state, action) => {
                const { errorMsg } = action.payload;
                return {
                    ...state,
                    isLoading: false,
                    message: errorMsg,
                    otpVerified: OTP_VERIFICATION_STATES.NOT_VERIFIED
                };
            })


            .addCase(userSignInAsync.pending, (state, action) => {
                return {
                    ...state,
                    isLoading: true,
                    message: '',
                };
            })
            .addCase(userSignInAsync.fulfilled, (state, action) => {

                return {
                    ...state,
                    isLoading: false,
                    message: action.payload,
                    emailSent: OTP_EMAIL_SENT_STATE.SENT
                };
            })
            .addCase(userSignInAsync.rejected, (state, action) => {
                const { errorMsg } = action.payload;
                return {
                    ...state,
                    isLoading: false,
                    message: errorMsg,
                    emailSent: OTP_EMAIL_SENT_STATE.NOT_SENT
                };
            })
            .addCase(userSignUpAsync.pending, (state) => {
                return {
                    ...state,
                    isLoading: true,
                    message: '',
                };
            })
            .addCase(userSignUpAsync.fulfilled, (state, action) => {
                console.log(action.payload);
                return {
                    ...state,
                    isLoading: false,
                    message: action.payload,
                    emailSent: OTP_EMAIL_SENT_STATE.SENT
                };
            })
            .addCase(userSignUpAsync.rejected, (state, action) => {
                const { errorMsg } = action.payload;
                return {
                    ...state,
                    isLoading: false,
                    message: errorMsg,
                    emailSent: OTP_EMAIL_SENT_STATE.NOT_SENT

                };
            })
            .addCase(resendOtpAsync.fulfilled, (state, action) => {
                const { message } = action.payload;
                return {
                    ...state,
                    isLoading: false,
                    message: message,
                    resentOpt: RESENT_OTP_EMAIL_SENT_STATE.SENT
                };
            })
            .addCase(resendOtpAsync.rejected, (state, action) => {
                const { errorMsg } = action.payload || 'unkown error at resendOtpAsync.rejected';
                console.log(action.payload)
                return {
                    ...state,
                    isLoading: false,
                    message: errorMsg,
                    resentOpt: RESENT_OTP_EMAIL_SENT_STATE.NOT_SENT,
                    emailSent: OTP_EMAIL_SENT_STATE.NOT_SENT,
                };
            })
            .addCase(resendOtpAsync.pending, (state, action) => {
                // console.log('resendOtp.pending');
                return {
                    ...state,
                    isLoading: true,
                    message: '',
                    resentOpt: RESENT_OTP_EMAIL_SENT_STATE.NOT_SENT,
                }

            })

    }
});

export const { updateAccessToken } = authSlice.actions;
export default authSlice.reducer;
