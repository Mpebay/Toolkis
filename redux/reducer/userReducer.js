import { createReducer } from "@reduxjs/toolkit";
import newUser from "../actions/actionNewUser";
import editUser from "../actions/actionEditUser";
import login from "../actions/actionLogin";
import newAdmPanUser from "../actions/actionNewAdmPanUser";
import { addFavorite, removeFavorite } from "../actions/actionFavorite"

const initialState = {
    user: {
        userName: null,
        role: 0,
        onLine: false,
        email: null
    },
    favorites: []
}

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(newAdmPanUser.fulfilled, (state, action) => {
            return {
                ...state,
                user: {
                    userName: action.payload.response.name,
                    role: action.payload.response.role,
                    onLine: action.payload.response.online,
                }
            };
        })
        .addCase(editUser.fulfilled, (state, action) => {
            return {
                ...state,
                user: {
                    userName: action.payload.response.name,
                    role: action.payload.response.role,
                    onLine: action.payload.response.online,
                }
            };
        })
        .addCase(login.fulfilled, (state, action) => {
            return {
                ...state,
                user: {
                    email: action.payload.response.user.email,
                    role: action.payload.response.user.role,
                }
            }
        })
        .addCase(newUser.fulfilled, (state, action) => {
            return {
                ...state,
                user: {
                    userName: action.payload.response.name,
                    role: action.payload.response.role,
                    onLine: action.payload.response.online,
                }
            };
        })
});
    .addCase(addFavorite, (state,action)=>{
        state.favorites = [...state.favorites, action.payload]
    })
    .addCase(removeFavorite, (state, action) => {
        state.favorites = state.favorites.filter(item => item._id !== action.payload._id);
    });
})

export default userReducer;
