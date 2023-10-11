import { createReducer } from "@reduxjs/toolkit";
import allProducts from "../actions/actionProducts.js";


const initialState={
    allItems:[],
    categories:[],
    pending: false
}

const itemsReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(
        allProducts.fulfilled, (state, action)=>{
            console.log(action.payload, "Action")
            console.log(state)
            
            state.allItems = action.payload.product
            
        
            
        }
    )
    .addCase(
        allProducts.pending, (state) => {
            state.pending = true
        }
    )
    
})

export default itemsReducer