import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editUser = createAsyncThunk("editUser", async (userData) => {
    try {
        console.log(userData)
        const { _id, ...data } = userData;
        const res = await axios.put(`http://localhost:8080/auth/${_id}`, data);
        console.log(res.data);
        return res.data;
    } catch (error) {
        throw error;
    }
});

export default editUser;
