import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const login = createAsyncThunk('login', async (userData) => {
  try {
    console.log(userData)
    const response = await axios.post("http://localhost:8080/auth/signin", userData);
    console.log(response.data)
    return response.data
  } catch (error) {
    throw error;
  }
});

export default login