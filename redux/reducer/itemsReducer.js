import { createReducer } from "@reduxjs/toolkit";
import allProducts from "../actions/actionProducts.js";
import allCategories from "../actions/actionCategories.js";
import newProduct from "../actions/actionNewProduct.js";
import editProduct from "../actions/actionEditProduct.js";



const initialState={
    allItems:[],
    categories:[],
    category:[],
    subcategories:[],
    pending: false
}

const itemsReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(
        allProducts.fulfilled, (state, action)=>{
            console.log(action.payload);
            state.allItems = action.payload.product
            state.pending = false
        }
    )
    .addCase(
        allProducts.pending, (state) => {
            state.pending = true
        }
    )
    .addCase(
        allCategories.fulfilled,(state,action)=>{
            const {sub , category} = action.payload
            const newArray = category.map(cat => {
            const subcategory = sub.filter(subcat => subcat.main_category._id === cat._id)
            return {category:cat.name,id:cat._id,sub:subcategory}})
            state.category = category
            state.subcategories = sub
            state.categories = newArray
            state.pending = false
        }
    )
    .addCase(
        allCategories.pending,(state)=>{
            state.pending = true
        }
    )
    .addCase(
        newProduct.fulfilled, (state, action) => {
            state.allItems = action.payload;
            state.pending = false;
        }
    )
    .addCase(
        editProduct.fulfilled, (state, action) => {
            state.allItems = action.payload;
            state.pending = false;
        }
    )
})

export default itemsReducer