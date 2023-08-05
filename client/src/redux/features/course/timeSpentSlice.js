// timeSpentSlice.js (or your Redux slice file)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "../../api/index"
const initialState = {
  timeSpentData: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  },
};



export const updateTimeSpentInDatabase = createAsyncThunk('timeSpent/updateTimeSpentInDatabase', async ({ dayOfWeek, timeSpent }, { getState, fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await api.updateTimeSpent(dayOfWeek, timeSpent);
    // console.log(response.data);
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

    updateTimeSpent: (state, action) => {
      console.log(action.payload);
      return {
        ...state.timeSpentData,
        ...action.payload
      };
    },
    resetTimeSpent: (state) => {
      return {
        ...state,
        timeSpentData: initialState.timeSpentData,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateTimeSpentInDatabase.fulfilled, (state, action) => {
        // console.log(action.payload);
        return {
          ...state,

        }
      })
      .addCase(updateTimeSpentInDatabase.rejected, (state, action) => {
        // Handle the rejected case if needed
        console.log('Error updating time spent in database:', action.error.message);
      });

  }
});

export const { updateTimeSpent, resetTimeSpent } = timeSpentSlice.actions;
export default timeSpentSlice.reducer;
