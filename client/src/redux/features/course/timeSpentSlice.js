// timeSpentSlice.js (or your Redux slice file)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "../../api/index"
const initialState = {
  dailyTimeSpent: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  },
};



export const updateDailyTimeSpentInDatabase = createAsyncThunk('timeSpent/updateDailyTimeSpentInDatabase', async ({ dayOfWeek, timeSpent }, { getState, fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await api.updateDailyTimeSpentRequest(dayOfWeek, timeSpent);
    return fulfillWithValue(response.data);

  } catch (error) {
    const errorMessage = error?.response.data.msg
    return rejectWithValue({ errorMessage });
  }
});


const timeSpentSlice = createSlice({
  name: 'timeSpent',
  initialState,
  reducers: {

    updateDailyTimeSpent: (state, action) => {
      return {
        ...state.dailyTimeSpent,
        ...action.payload
      };
    },
    resetTimeSpent: (state) => {
      return {
        ...state,
        dailyTimeSpent: initialState.dailyTimeSpent,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateDailyTimeSpentInDatabase.fulfilled, (state, action) => {
        return {
          ...state,

        }
      })
      .addCase(updateDailyTimeSpentInDatabase.rejected, (state, action) => {
        // Handle the rejected case if needed
        // console.log('Error updating time spent in database:', action.error.message);
      });

  }
});

export const { updateDailyTimeSpent, resetTimeSpent } = timeSpentSlice.actions;
export default timeSpentSlice.reducer;
