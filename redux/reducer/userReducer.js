import { createReducer } from "@reduxjs/toolkit";
import newUser from "../actions/actionNewUser";
import editUser from "../actions/actionEditUser";
import login from "../actions/actionLogin";
import newAdmPanUser from "../actions/actionNewAdmPanUser";
import { addFavorite, removeFavorite } from "../actions/actionFavorite"
import { logout } from "../actions/actionLogout";
import { actionToken } from "../actions/actionToken";

const initialState = {
    user: {
        userName: null,
        role: 0,
        onLine: false,
        photo: null,
        email: null,
        token:null
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
                    photo: action.payload.response.user.photo,
                    onLine: true,
                    role: action.payload.response.user.role,
                    token: action.payload.response.token,
                    
                }
            }
        })
        .addCase(actionToken.fulfilled, (state, action) => {
            return {
                ...state,
                user: {
                    email: action.payload.user.email,
                    role: action.payload.user.role,
                    onLine: true,
                    photo: action.payload.user.photo,
                    token: action.payload.token,
                    
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
        .addCase(addFavorite, (state,action)=>{
            state.favorites = [...state.favorites, action.payload]
        })
        .addCase(removeFavorite, (state, action) => {
            state.favorites = state.favorites.filter(item => item._id !== action.payload._id);
        })
        .addCase(logout, (state) => {
            // Restablece el estado al cerrar la sesión
            state.user = {
              userName: null,
              role: 0,
              onLine: false,
              email: null
            };
            state.favorites = [];
          });
});

export default userReducer;
