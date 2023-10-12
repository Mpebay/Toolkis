import { createReducer } from "@reduxjs/toolkit";
import allProducts from "../actions/actionProducts.js";
import allCategories from "../actions/actionCategories.js";


const initialState={
    allItems:[],
    categories:[],
    pending: false
}

const itemsReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(
        allProducts.fulfilled, (state, action)=>{
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
            state.categories = newArray

            state.pending = false
        }
    )
    .addCase(
        allCategories.pending,(state)=>{
            state.pending = true
        }
    )
    
})

export default itemsReducer