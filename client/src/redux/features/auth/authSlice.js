import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { coursesList } from "../../../courseData/courseData";
import * as api from "../../api/index"

const initialState = {
    userId: '',
    accessToken: ''
}

export const addNewUser = createAsyncThunk("auth/addNewUser", async ({ name, phoneNumber }, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        // console.log(name, phoneNumber)
        const res = await api.addNewUser(name, phoneNumber);
        // console.log(res.data);
        return fulfillWithValue(res.data);
    } catch (error) {
        const errorMessage = error?.response.data.msg
        return rejectWithValue({ errorMessage });
    }
});


export const verifyAuthentication = createAsyncThunk("auth/verify", async ({ }, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        const res = await api.verifyUserAuth();
        // console.log(res.data);
        return fulfillWithValue(res.data);
    } catch (error) {
        const errorMessage = error?.response.data.msg
        return rejectWithValue({ errorMessage });
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addNewUser.fulfilled, (state, action) => {
                return {
                    ...state,
                }

            })
            .addCase(verifyAuthentication.fulfilled, (state, action) => {
                // console.log(action.payload);
                return {
                    ...state,
                    ...action.payload
                }
            })

    }


})


export const { } = authSlice.actions;
export default authSlice.reducer;