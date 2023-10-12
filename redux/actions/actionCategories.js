import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const allCategories = createAsyncThunk('allCategories', async ()=>{
    try {
        const res = await axios.get("http://localhost:8080/categories")
        return res.data
        

    } catch (error) {
        console.log(error, "error")
    }
}) 

export default allCategories