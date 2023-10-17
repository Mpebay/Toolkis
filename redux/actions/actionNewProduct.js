import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const newProduct = createAsyncThunk("newProduct", async (productData)=>{
    try {
        const res = await axios.post("http://localhost:8080/products", productData)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
})

export default newProduct

