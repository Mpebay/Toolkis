import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const allProducts = createAsyncThunk('allProducts', async ()=>{
    try {
        const res = await axios.get("http://localhost:8080/products")
        console.log(res.data, "algo");
        return res.data
        

    } catch (error) {
        console.log(error, "error")
    }
}) 

export default allProducts