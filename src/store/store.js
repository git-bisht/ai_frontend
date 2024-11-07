// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import aiToolReducer from './aiToolSlice';

const store = configureStore({
  reducer: {
    aiTools: aiToolReducer,
  },
});

export default store;
