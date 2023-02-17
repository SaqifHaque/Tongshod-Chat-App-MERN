import { configureStore } from  '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import activateReducer from './features/activate/activateSlice';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        activate: activateReducer,
    }
})