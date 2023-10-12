import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reducer/itemsReducer";
import userReducer from "./reducer/userReducer";
import cartReducer from "./reducer/cartReducer";

export const store = configureStore({
    reducer:{
        itemsReducer,
        userReducer,
        cartReducer
    }
})