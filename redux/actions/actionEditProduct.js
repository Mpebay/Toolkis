import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editProduct = createAsyncThunk("editProduct", async (productData) => {
    try {
        console.log(productData)
        const { _id, ...data } = productData;
        const res = await axios.put(`http://localhost:8080/products/${_id}`, data);
        console.log(res.data);
        return res.data;
    } catch (error) {
        throw error;
    }
});

export default editProduct;
