import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMessages = createAsyncThunk('rail-react/messages', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/greetings');
  return response.data;
});

const messageReducer = createSlice({
  name: 'react-rail/messages',
  initialState: {
    messages: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled,
      (state, action) => ({ ...state, messages: [...state.messages, action.payload] }));
  },
});

export default messageReducer.reducer;
