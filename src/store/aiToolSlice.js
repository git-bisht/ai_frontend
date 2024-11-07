// src/store/aiToolSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace with the URL of your Laravel API endpoint for AI tools
const API_URL = 'http://localhost:8000/api/ai-tools';

export const fetchAiTools = createAsyncThunk('aiTools/fetchAiTools', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const aiToolSlice = createSlice({
  name: 'aiTools',
  initialState: {
    tools: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAiTools.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAiTools.fulfilled, (state, action) => {
        state.loading = false;
        state.tools = action.payload;
      })
      .addCase(fetchAiTools.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default aiToolSlice.reducer;
