import axios from "axios";
import { updateAccessToken } from "../features/auth/authSlice"
let url = process.env.REACT_APP_BASE_URL;

const API = axios.create({
    baseURL: url,
})

let store;
export const injectStore = _store => {
    store = _store
}

//--------------------------------------------------------------------------------------------------

API.interceptors.response.use(
    async (response) => response, // Just pass through successful responses
    async (error) => {
        const originalRequest = error.config;

        // Check if the error response is due to an expired access token
        if (error.response.status === 401 && originalRequest.url !== '/api/auth/checkUserAuth') {
            // Attempt to refresh the access token using the refresh token
            try {
                const refreshTokenResponse = await API.post(`${url}/api/auth/checkUserAuth`, null, {
                    withCredentials: true
                });
                console.log('refreshTokenResponse', refreshTokenResponse)
                // If refresh token is successful, update the access token and retry the original request
                if (refreshTokenResponse.status === 200) {
                    const newAccessToken = refreshTokenResponse.data.accessToken;
                    console.log('new token', newAccessToken);
                    store.dispatch(updateAccessToken(newAccessToken));
                    // originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    originalRequest.headers['Authorization'] = "Bearer " + newAccessToken;
                    return API(originalRequest);
                }
            } catch (refreshError) {
                // If refresh token is expired, log a message and handle accordingly
                console.log('refreshError', refreshError);
                if (refreshError.response.status === 401) {
                    console.log('Refresh token expired. Please log in again.');
                }
            }
        }

        // For other errors, reject the promise
        return Promise.reject(error);
    }
);




// <-- NOT IN USE -->------------------------------------------------------------------------
export const verifyUserAuth = () =>
    API.get("/api/auth/verifyAuth");


export const getCourseDataAsync = (user_id) =>
    API.get(`/api/course/getCourseDataAsync/${user_id}`);


export const addNewUser = (name, phoneNumber) =>
    API.post("/api/user/addUser", { name, phoneNumber });

//<-- IN USE --> ----------------------------------------------------------------------------------

export const markTopicCompletionRequest = (data) =>
    API.post("/api/course/markProgress", data);


export const updateDailyTimeSpentRequest = (data) =>
    API.post("/api/course/updateDailyTimeSpent", data);


export const bookmarkCourseRequest = (accessToken, data) =>
    API.post("/api/course/addBookmark", data, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },
    });

// ----------------------------------------------------------------------

export const userSignInRequest = (data) =>
    API.post("/api/auth/userSignIn", data);


export const userSignUpRequest = (data) =>
    API.post("/api/auth/userSignUp", data);


// ----------------------------------------------------------------------


export const verifyOtpRequest = (data) =>
    API.post("/api/auth/verifyOtp", data);

export const resendOtpRequest = (data) =>
    API.post("/api/auth/resendOtp", data);


export const checkUserAuthRequest = () =>
    API.post("/api/auth/checkUserAuth", null, {
        withCredentials: true,
    });

// ----------------------------------------------------------------------

export const getUserDataRequest = (token) =>
    API.get(`/api/course/getCourseData`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });


// export default axiosInterceptor;