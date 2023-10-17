import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const newAdmPanUser = createAsyncThunk("newAdmPanUser", async (userData)=>{
    try {
        console.log(userData)
        const res = await axios.post("http://localhost:8080/auth/admregister", userData)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
})

export default newAdmPanUser

