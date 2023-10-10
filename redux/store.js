import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reducer/itemsReducer";
import userReducer from "./reducer/userReducer";

export const store = configureStore({
    reducer:{
        items: itemsReducer,
        user: userReducer,
    }
})