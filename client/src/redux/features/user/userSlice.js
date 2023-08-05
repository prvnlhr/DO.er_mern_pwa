import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { coursesList } from "../../../courseData/courseData";
import * as api from "../../api/index"

const initialState = {
    userId: '',
    username: '',
    phoneNumer: '',
}

export const getUserData = createAsyncThunk("user/getUser", async (userId, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        const res = await api.getUserData(userId);
        return fulfillWithValue(res.data);
    } catch (error) {
        const errorMessage = error?.response.data.msg
        return rejectWithValue({ errorMessage });
    }
});


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getUserData.fulfilled, (state, action) => {
            return {
                ...state,

            }

        })

    }


})

export const { } = userSlice.actions;
export default userSlice.reducer;