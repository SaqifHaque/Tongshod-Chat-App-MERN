import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isAuth: false,
   user: {
        activated: false
   },
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
            const { user } = action.payload;
            state.user = user;
            state.isAuth = true;
        },
        SET_OTP(state, action) {
            const { phone, hash } = action.payload;
            state.otp.phone = phone;
            state.otp.hash = hash;
        },
    }
})

export const { SET_AUTH, SET_OTP } = authSlice.actions;

export const selectOtp = (state) => state.auth.otp;
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectUser = (state) => state.auth.user;


export default authSlice.reducer;