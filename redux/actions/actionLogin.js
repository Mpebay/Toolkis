import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const login = createAsyncThunk('login', async (userData) => {
  try {
    console.log(userData)
    const response = await axios.post("http://localhost:8080/auth/signin", userData);
    localStorage.setItem('token', response.data.response.token)
    localStorage.setItem('email', response.data.response.user.email)
    return response.data

  } catch (error) {
    throw error;
  }
});

export default login