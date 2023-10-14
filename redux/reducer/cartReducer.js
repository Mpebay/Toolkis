import { createReducer } from "@reduxjs/toolkit";
import actionCart from "../actions/actionCart";
import {eliminateOne,addOne, restOne, eliminateAll} from "../actions/actionEliminateOne";

const initialState={
    cart:[]
}

const cartReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(actionCart,(state,action)=>{
        const item = {
            product : action.payload,
        quantity: 1 ,
    total: action.payload.price}
        state.cart = [...state.cart,item]
    })
    .addCase(eliminateOne,(state,action)=>{
        state.cart = state.cart.filter(item => item.product?._id !== action.payload);
    })
    .addCase(eliminateAll,(state,action)=>{
        state.cart = action.payload
    })
    .addCase(addOne,(state,action)=>{
        const existingItem = state.cart.find((item) => item.product?._id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.product.price * existingItem.quantity}
    })
    .addCase(restOne,(state,action)=>{
        const existingItem = state.cart.find((item) => item.product?._id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
            existingItem.quantity -= 1
            existingItem.total = existingItem.product.price * existingItem.quantity}
        }
    })
})

export default cartReducer