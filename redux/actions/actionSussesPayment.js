import { createAction } from "@reduxjs/toolkit";

export const actionSussesPayment = createAction("actionSussesPayment",(state)=>{

    return {
        payload: state
    }

})