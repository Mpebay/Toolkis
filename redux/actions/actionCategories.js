import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const allCategories = createAsyncThunk("allCategories", async ()=>{
    try {
        const res = await axios.get("http://localhost:8080/subcategory")
        const category = await axios.get("http://localhost:8080/categories")
        return {sub:res.data.subCategory,category:category.data.category}
    } catch (error) {
        console.log(error);
    }
})

export default allCategories