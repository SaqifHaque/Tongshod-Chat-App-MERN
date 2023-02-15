import { createSlice } from '@reduxjs/toolkit';

// const name = JSON.parse(localStorage.getItem("name"));

const initialState = {
   isAuth: false,
   user: null,
   otp: {
        phone: '',
        hash: ''
   }
}

const authSlice  = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_AUTH(state, action) {
            // state.isAuth = action.payload;
        },
        SET_OTP(state, action) {
            const { phone, hash } = action.payload;
            state.otp.phone = phone;
            state.otp.hash = hash;
        },
        },
    }
})

export const { SET_AUTH, SET_OTP } = authSlice.actions;

// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;


export default authSlice.reducer;