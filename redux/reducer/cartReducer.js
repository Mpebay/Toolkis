import { createReducer } from "@reduxjs/toolkit";
import actionCart from "../actions/actionCart";

const initialState={
    cart:[]
}

const cartReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(actionCart,(state,action)=>{
        state.cart = [...state.cart,action.payload]
    })
})

export default cartReducer