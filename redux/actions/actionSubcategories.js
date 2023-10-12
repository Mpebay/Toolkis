import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const allSubcategories = createAsyncThunk('allSubcategories', async ()=>{
    try {
        const res = await axios.get("http://localhost:8080/subcategory")
        return res.data
        

    } catch (error) {
        console.log(error, "error")
    }
}) 

export default allSubcategories