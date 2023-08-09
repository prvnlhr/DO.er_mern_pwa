import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { coursesList } from "../../../courseData/courseData";
import * as api from "../../api/index"

const initialState = {
    userId: '',
    username: '',
}

export const getUserDataAsync = createAsyncThunk("user/getUserData", async (token, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        const res = await api.getUserDataRequest(token);
        return fulfillWithValue(res.data);
    } catch (error) {
        console.error('Error:', error?.response?.data);
        const { errorMsg, actualError } = error?.response?.data;
        return rejectWithValue({
            errorMsg: errorMsg || 'unknown msg'
        });
    }
});


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: (builder) => {
        builder

            .addCase(getUserDataAsync.pending, (state, action) => {
                return {
                    ...state,
                }

            })
            .addCase(getUserDataAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                }

            })
            .addCase(getUserDataAsync.rejected, (state, action) => {
                return {
                    ...state,
                }

            })

    }


})

export const { } = userSlice.actions;
export default userSlice.reducer;