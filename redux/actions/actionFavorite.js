import { createAction } from "@reduxjs/toolkit";

export const addFavorite = createAction("addFavorite", (item)=>{
    return{payload:item}
})

export const removeFavorite = createAction("removeFavorite", (itemToRemove) => {
    return {payload: itemToRemove}
  });