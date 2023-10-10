import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    user:{
        userName:null,
        role:0,
        onLine:false,
    },
    favorites:[]
}

const userReducer = createReducer(initialState,(builder)=>{
    builder
})

export default userReducer