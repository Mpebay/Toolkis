import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const actionToken = createAsyncThunk("signinToken", async(token)=>{
    
   try {
    const response = await axios.post("http://localhost:8080/auth/signinToken",{},{
        headers: {
            Authorization:"Bearer " + token
        }
    })
    console.log(response);
    return{user: response.data.response.user, token: token}
   } catch (error) {
    console.log(error)
   }
})

