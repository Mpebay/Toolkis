import { createAction } from "@reduxjs/toolkit";


const actionCart = createAction("actionCart", (item)=>{

    return {payload : item}

})

export default actionCart