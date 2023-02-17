import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   name: '',
   avatar: ''
}

const activateSlice  = createSlice({
    name: "activate",
    initialState,
    reducers: {
        SET_NAME(state, action) {
            state.name = action.payload;
        },
        SET_AVATAR(state, action) {
            state.avatar = action.payload;
        },
    }
})

export const { SET_NAME, SET_AVATAR } = activateSlice.actions;

// export const selectOtp = (state) => state.auth.otp;



export default activateSlice.reducer;