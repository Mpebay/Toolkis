import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const newUser = createAsyncThunk("newUser", async (userData)=>{
    try {
        const res = await axios.post("http://localhost:8080/auth/register", userData)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
})

export default newUser
