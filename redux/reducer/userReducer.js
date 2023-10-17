import { createReducer } from "@reduxjs/toolkit";
import { addFavorite, removeFavorite } from "../actions/actionFavorite";

const initialState = {
    user:{
        userName:null,
        role:0,
        onLine:false,
        
    },
    favorites:[],
    
}

const userReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(addFavorite, (state,action)=>{
        state.favorites = [...state.favorites, action.payload]
    })
    .addCase(removeFavorite, (state, action) => {
        state.favorites = state.favorites.filter(item => item._id !== action.payload._id);
    });
})

export default userReducer