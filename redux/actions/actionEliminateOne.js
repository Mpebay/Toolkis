import { createAction } from "@reduxjs/toolkit";

export const eliminateOne = createAction("eliminateOne",(id)=>{

    return {
        payload:id
    }
})
export const eliminateAll = createAction("eliminateAll",()=>{

    return {
        payload:[]
    }
})
export const addOne = createAction("addOne",(id)=>{

    return {
        payload:id
    }
})
export const restOne = createAction("restOne",(id)=>{

    return {
        payload:id
    }
})

