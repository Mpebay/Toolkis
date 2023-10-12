import { createReducer } from "@reduxjs/toolkit";
import allProducts from "../actions/actionProducts.js";
import allCategories from "../actions/actionCategories.js";
import allSubcategories from "../actions/actionSubcategories.js";


const initialState={
    allItems:[],
    categories:[],
    subcategories:[],
    pending: false
}

const itemsReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(
        allProducts.fulfilled, (state, action)=>{
            state.allItems = action.payload.product
        }
    )
    .addCase(
        allProducts.pending, (state) => {
            state.pending = true
        }
    )
    .addCase(
        allCategories.fulfilled, (state, action)=>{
            state.categories = action.payload.product
        }
    )
    .addCase(
        allSubcategories.fulfilled, (state, action)=>{
            state.subcategories = action.payload.subCategory
        }
    )
    
})

export default itemsReducer